from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import joblib
import numpy as np
import fitz
import pytesseract
from PIL import Image
import io
import re
import os
from sentence_transformers import SentenceTransformer

app = Flask(__name__)
CORS(app,
     origins=["https://improved-fortnight-4jw669qj4j6whj5g6-5173.app.github.dev"],
     supports_credentials=True,
     allow_headers=["Content-Type"],
     methods=["GET", "POST", "OPTIONS"]
)
# ── Load model & tools once at startup ──────────────────────────────────────
print("Loading model...")
model = tf.keras.models.load_model("/workspaces/temp_Proj_res/Backend/models/finale_resume_classifier.keras")
le    = joblib.load("/workspaces/temp_Proj_res/Backend/models/finale_label_encoder_2.pkl")
st    = SentenceTransformer("all-MiniLM-L6-v2")
print("Model ready.")

# ── Helpers ──────────────────────────────────────────────────────────────────
def clean_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-zA-Z ]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def extract_text(file_bytes: bytes) -> str:
    doc  = fitz.open(stream=file_bytes, filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text("text")
    if len(text) < 50:                          # fallback to OCR
        for page in doc:
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
            img = Image.open(io.BytesIO(pix.tobytes()))
            text += pytesseract.image_to_string(img)
    return text

def predict(text: str):
    cleaned  = clean_text(text)
    emb      = st.encode(cleaned).reshape(1, -1)
    # Normalise (approximates the StandardScaler used during training)
    emb      = (emb - emb.mean()) / (emb.std() + 1e-8)
    probs    = model.predict(emb)[0]             # shape (num_classes,)
    top3_idx = np.argsort(probs)[::-1][:3]
    top3     = [
        {"label": le.inverse_transform([int(i)])[0], "confidence": round(float(probs[i]) * 100, 1)}
        for i in top3_idx
    ]
    return {
        "prediction":       top3[0]["label"],
        "confidence":       top3[0]["confidence"],
        "top_3_prediction": top3,
    }

# ── Routes ───────────────────────────────────────────────────────────────────
@app.route("/predict", methods=["POST"])
def predict_route():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    f = request.files["file"]
    if not f.filename.lower().endswith(".pdf"):
        return jsonify({"error": "Only PDF files are supported"}), 400

    try:
        raw_text = extract_text(f.read())
        if len(raw_text.strip()) < 20:
            return jsonify({"error": "Could not extract text from PDF"}), 422
        result = predict(raw_text)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)

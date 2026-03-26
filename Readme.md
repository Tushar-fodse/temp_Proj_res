
# 🚀 Resume Analyzer AI — Smart Career Prediction System

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/Python-ML-yellow?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
</p>

---


## 🌟 Overview

> An AI-powered web application that analyzes resumes and predicts suitable job roles with confidence scores.

This project combines **Machine Learning + Web Development** to help users identify the best career paths based on their resume.

---

## ✨ Features

* 📄 Upload Resume (PDF/DOCX)
* 🤖 AI-based Job Role Prediction
* 📊 Confidence Score Display
* 🥇 Top 3 Predictions
* ⚡ Fast Backend Processing
* 🎨 Clean React UI

---

## 🧠 How It Works

```
Upload Resume → Backend → Text Extraction → ML Model → Prediction → Result
```

---

## 🛠️ Tech Stack

### 💻 Frontend

* React.js
* CSS3

### ⚙️ Backend

* Node.js + Express *(or Flask — update if needed)*

### 🤖 Machine Learning

* Python
* Scikit-learn / NLP

---

## 📂 Project Structure

## 🧠 ML Model Setup (IMPORTANT)

⚠️ The trained model files are not included in this repository due to GitHub size limits.

### 📥 Download Model Files

Download the required files from the links below:

- 🔗 Resume Classifier Model  
  https://drive.google.com/file/d/1JHTaHlPICB9CrN3TsTrwTe09Ow0pYteR/view?usp=drive_link

- 🔗 Label Encoder  
  https://drive.google.com/file/d/1ClQ1Pi9nMhkuLmxMKJHn0P22O2tS72Ek/view?usp=drive_link

---

### 📁 Place Files in This Directory

After downloading, place both files inside:

```
temp_Proj_res/
│
├── client/           # React Frontend
├── server/           # Backend API
├── model/             # (Not included, download separately)
├── uploads/          # Uploaded Resumes
├── screenshots/      # Images
└── README.md
```

---

## ⚙️ Installation

### 🔽 Clone Repository

```bash
git clone https://github.com/Tushar-fodse/temp_Proj_res.git
cd temp_Proj_res
```

---

### 📦 Install Dependencies

#### Frontend

```bash
cd client
npm install
npm start
```

#### Backend (Node)

```bash
cd server
npm install
npm start
```

#### Backend (Python ML)

```bash
pip install -r requirements.txt
python app.py
```

---

## 📡 API Example

### Endpoint

```
POST /upload
```

### Response

```json
{
  "prediction": "Software Engineer",
  "confidence": 87,
  "top_3_prediction": [
    "Software Engineer",
    "Web Developer",
    "Data Scientist"
  ]
}
```

---

## 📸 Screenshots

> Add images inside `/screenshots` folder

## 📸 Screenshots

<img src="Screenshot 2026-03-26 032650.png" width="700"/>

<a href="Tushar Fodse Resume (1).pdf" target="_blank">View Resume</a>

## 🚀 Deployment

* 🌐 Vercel (Frontend)
* 🔥 Render / Railway (Backend)
* ☁️ AWS / GCP (Full Stack)

---

## 🔮 Future Improvements

* 🔐 User Authentication
* 📈 Resume Improvement Suggestions
* 🧠 AI Feedback (LLM Integration)
* 📊 Dashboard Analytics

---

## 🤝 Contributing

```bash
git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name
```

Then create a Pull Request 🚀

---

## 👨‍💻 Author

**Tushar Fodse**

* GitHub: [https://github.com/Tushar-fodse](https://github.com/Tushar-fodse)

---

## ⭐ Support

If you like this project:

⭐ Star this repo
📢 Share with others
💼 Add to your portfolio

```md
<p align="center">
  <img src="./screenshots/demo.gif" width="700"/>
</p>
```

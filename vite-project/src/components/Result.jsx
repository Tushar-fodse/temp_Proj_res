import { useContext } from "react";
import { ResumeResultContext } from "../Context/ResumeContext";
import './Result.css'

export const Result=()=>{
const {resume}=useContext(ResumeResultContext)
  if (!resume) return null
  const { prediction, confidence, top_3_prediction } = resume
    const confidenceColor = confidence >= 70 ? "#22c55e" : confidence >= 45 ? "#f59e0b" : "#ef4444"
 
  return (
    <div className="result-card">
      <h2 className="result-title">Classification Result</h2>
 
      <div className="main-prediction">
        <span className="category-badge">{prediction}</span>
        <span className="confidence-tag" style={{ color: confidenceColor }}>
          {confidence}% confidence
        </span>
      </div>
 
      <div className="top3">
        <p className="top3-label">Top 3 Predictions</p>
        {top_3_prediction.map((item, i) => (
          <div key={i} className="top3-row">
            <span className="rank">#{i + 1}</span>
            <span className="top3-name">{item.label}</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${item.confidence}%`, background: i === 0 ? "#6366f1" : "#cbd5e1" }} />
            </div>
            <span className="top3-conf">{item.confidence}%</span>
          </div>
        ))}
      </div>
 
      {confidence < 50 && (
        <p className="low-conf-warn">
          ⚠ Low confidence — this resume may belong to a category not in the training data.
        </p>
      )}
    </div>
  )
}
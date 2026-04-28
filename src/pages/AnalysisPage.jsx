import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const AnalysisPage = ({ result, onViewHeatmap, onReset }) => {
  const isCancer = result === 'cancer';

  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Detection Result</h2>

      {isCancer ? (
        <div style={{ padding: '20px', borderRadius: '15px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444' }}>
          <AlertCircle size={50} color="#ef4444" style={{ marginBottom: '10px' }} />
          <h3 style={{ color: '#ef4444', fontSize: '2rem' }}>CANCER DETECTED</h3>
          <p style={{ margin: '15px 0' }}>The AI model has identified malignant tissue patterns.</p>
          <button className="btn-primary" onClick={onViewHeatmap}>View Affected Region (Heatmap)</button>
        </div>
      ) : (
        <div style={{ padding: '20px', borderRadius: '15px', background: 'rgba(20, 184, 166, 0.1)', border: '1px solid #14b8a6' }}>
          <ShieldCheck size={50} color="#14b8a6" style={{ marginBottom: '10px' }} />
          <h3 style={{ color: '#14b8a6', fontSize: '2rem' }}>NO CANCER DETECTED</h3>
          <p style={{ margin: '15px 0' }}>The screening shows healthy oral tissue. No immediate action required.</p>
          <button className="btn-primary" onClick={onReset}>Scan Another Patient</button>
        </div>
      )}
    </div>
  );
};

export default AnalysisPage;
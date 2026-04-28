import React from 'react';

const GradCamPage = ({ onBack }) => {
  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <h2>Affected Region Localization</h2>
      <p style={{ color: 'var(--text-dim)', marginBottom: '20px' }}>Grad-CAM Heatmap indicating high-activation zones</p>
      
      <div style={{ position: 'relative', display: 'inline-block', background: '#111', borderRadius: '20px', padding: '20px' }}>
        <div style={{ width: '400px', height: '300px', background: '#334155', borderRadius: '10px', opacity: 0.5 }}></div>
        {/* Simulated Heatmap Glow */}
        <div style={{ 
          position: 'absolute', top: '40%', left: '45%', width: '120px', height: '120px', 
          background: 'radial-gradient(circle, rgba(255,0,0,0.8) 0%, rgba(255,255,0,0.4) 50%, transparent 100%)',
          filter: 'blur(20px)', borderRadius: '50%', animation: 'pulse 2s infinite'
        }}></div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <button className="btn-primary" onClick={onBack}>Back to Results</button>
      </div>
    </div>
  );
};

export default GradCamPage;

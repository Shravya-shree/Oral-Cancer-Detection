import React from 'react';
import { Download, Share2 } from 'lucide-react';

const ReportPage = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <div className="glass-card" style={{ padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontSize: '2rem' }}>Medical Report</h2>
            <p style={{ color: 'var(--teal-accent)', fontFamily: 'monospace' }}>#ID-2026-X</p>
          </div>
          <div style={{ width: '60px', height: '60px', background: 'white', display: 'flex', flexWrap: 'wrap', padding: '5px' }}>
             {/* Simple CSS QR Placeholder */}
             {[...Array(9)].map((_, i) => <div key={i} style={{ width: '33%', height: '33%', background: i % 2 === 0 ? 'black' : 'white' }}></div>)}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>PATIENT NAME</p>
            <p style={{ fontWeight: 'bold' }}>John Doe</p>
          </div>
          <div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>SCAN DATE</p>
            <p style={{ fontWeight: 'bold' }}>April 28, 2026</p>
          </div>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(239, 68, 68, 0.2)', marginBottom: '30px' }}>
          <p style={{ color: '#fca5a5', fontSize: '0.9rem' }}><strong>Finding:</strong> Suspicious malignant lesion localized in buccal mucosa. Immediate clinical follow-up required.</p>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', flex: 1 }}> <Download size={16} /> PDF</button>
          <button className="btn-primary" style={{ flex: 1 }}> <Share2 size={16} /> Share</button>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
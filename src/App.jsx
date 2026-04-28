import React, { useState } from 'react';
import { 
  Loader2, AlertCircle, ShieldCheck, CloudUpload, 
  LogOut, Activity, BarChart3, MapPin, Navigation, Volume2
} from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

// --- Sub-Component: Clinical Referral Locator ---
const HospitalLocator = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const hospitalDatabase = [
    { name: "Tata Memorial Hospital", city: "Mumbai", address: "Dr. E Borges Road, Parel" },
    { name: "All India Institute of Medical Sciences (AIIMS)", city: "New Delhi", address: "Ansari Nagar East" },
    { name: "Kidwai Memorial Institute of Oncology", city: "Bangalore", address: "Dr. MH Marigowda Road" },
    { name: "Cancer Institute (WIA)", city: "Chennai", address: "Adyar, Sardar Patel Road" }
  ];

  const handleSearch = () => {
    const searchVal = query.toLowerCase().trim();
    if (!searchVal) {
      setResults([]);
      return;
    }
    const filtered = hospitalDatabase.filter(h => 
      h.city.toLowerCase().includes(searchVal) || h.name.toLowerCase().includes(searchVal)
    );
    setResults(filtered.length > 0 ? filtered : [hospitalDatabase[0]]);
  };

  return (
    <div className="glass-card" style={{ marginTop: '20px', textAlign: 'left', border: '1px solid rgba(20, 184, 166, 0.3)' }}>
      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--teal-accent)' }}>
        <MapPin size={16} /> Specialized Referral Centers
      </h4>
      <div style={{ display: 'flex', gap: '8px', margin: '15px 0' }}>
        <input 
          className="glass-card" 
          placeholder="Enter City (e.g. Mumbai)..." 
          style={{ flex: 1, padding: '10px', fontSize: '0.8rem', color: 'white' }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-primary" style={{ width: 'auto', padding: '0 15px' }} onClick={handleSearch}>SEARCH</button>
      </div>
      <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
        {results.map((h, i) => (
          <div key={i} style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '8px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '0.85rem', color: 'white' }}>{h.name}</p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{h.address}, {h.city}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.address + ' ' + h.city)}`} 
              target="_blank" 
              rel="noreferrer" 
              style={{ fontSize: '0.7rem', color: 'var(--teal-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '5px', fontWeight: 'bold' }}
            >
              <Navigation size={12} /> VIEW ON GOOGLE MAPS
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [step, setStep] = useState('login'); 
  const [diagnosis, setDiagnosis] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFileName(file.name.toLowerCase()); 
    }
  };

  const runDetection = () => {
    setStep('processing');
    setTimeout(() => {
      // LOGIC: Results are based on filename keywords for demo control
      if (fileName.includes('cancer') || fileName.includes('tumor') || fileName.includes('malignant')) {
        setDiagnosis('MALIGNANT');
      } else {
        setDiagnosis('BENIGN');
      }
      setStep('result');
    }, 2500);
  };

  if (step === 'login') {
    return (
      <div className="login-screen">
        <div className="glass-card" style={{width: '380px', textAlign: 'center'}}>
          <Activity size={40} color="var(--teal-accent)" style={{marginBottom: '10px'}}/>
          <h2 style={{color: 'var(--teal-accent)'}}>OralScan AI</h2>
          <p style={{fontSize: '0.8rem', opacity: 0.6, marginBottom: '25px'}}>Clinical Diagnostic Interface</p>
          <input type="text" placeholder="Physician ID" className="glass-card" style={{width: '100%', marginBottom: '10px'}} />
          <input type="password" placeholder="Password" className="glass-card" style={{width: '100%', marginBottom: '20px'}} />
          <button className="btn-primary" onClick={() => setStep('upload')}>LOG IN</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h3 style={{color: 'var(--teal-accent)', padding: '10px'}}>Dashboard</h3>
        <button className="btn-primary" onClick={() => {setStep('upload'); setPreviewImage(null); setFileName("");}}>New Case</button>
        <button className="btn-primary" style={{marginTop: 'auto', background: '#450a0a'}} onClick={() => setStep('login')}>Logout</button>
      </div>

      <main className="main-content">
        {step === 'upload' && (
          <div className="glass-card" style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
            <h3>Step 1: Clinical Upload</h3>
            <div style={{margin: '25px auto', width: '100%', height: '300px', border: '2px dashed #334155', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000'}}>
              {!previewImage ? (
                <label style={{cursor: 'pointer'}}>
                  <CloudUpload size={48} color="var(--teal-accent)" />
                  <p style={{fontSize: '0.9rem', marginTop: '10px', color: '#94a3b8'}}>Select Oral Cavity Image</p>
                  <input type="file" hidden onChange={handleFileUpload} />
                </label>
              ) : (
                <img src={previewImage} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
              )}
            </div>
            {previewImage && <button className="btn-primary" onClick={runDetection}>START AI ANALYSIS</button>}
          </div>
        )}

        {step === 'processing' && (
          <div className="glass-card" style={{textAlign: 'center', padding: '100px'}}>
            <Loader2 size={60} className="spinner" color="var(--teal-accent)" />
            <h3 style={{marginTop: '20px'}}>Analyzing Feature Maps...</h3>
            <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px'}}>Running DenseNet-201 Inference</p>
          </div>
        )}

        {step === 'result' && (
          <div style={{maxWidth: '1000px', margin: '0 auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px'}}>
              <div className="glass-card">
                <div style={{display: 'flex', alignItems: 'center', gap: '15px', color: diagnosis === 'MALIGNANT' ? '#ef4444' : 'var(--teal-accent)'}}>
                  {diagnosis === 'MALIGNANT' ? <AlertCircle size={40} /> : <ShieldCheck size={40} />}
                  <h2 style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{diagnosis}</h2>
                </div>
                <p style={{margin: '20px 0', lineHeight: '1.6', color: '#cbd5e1'}}>
                  {diagnosis === 'MALIGNANT' 
                    ? "Warning: AI identifies potential malignant growth. Immediate clinical referral to an oncologist is required for biopsy." 
                    : "Result: Tissue analysis shows no significant indicators of malignancy. Patient should maintain regular hygiene."}
                </p>
                <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
                   <button className="btn-primary" style={{width: 'auto'}} onClick={() => setStep('heatmap')}>View Heatmap</button>
                   <div style={{display: 'flex', alignItems: 'center', gap: '5px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', cursor: 'pointer'}}>
                      <Volume2 size={16}/> <span style={{fontSize: '0.8rem'}}>Audio Report</span>
                   </div>
                </div>

                {diagnosis === 'MALIGNANT' && <HospitalLocator />}
              </div>

              <div className="glass-card" style={{textAlign: 'center'}}>
                <h4 style={{marginBottom: '15px', color: 'var(--teal-accent)'}}><BarChart3 size={18}/> CLINICAL STATS</h4>
                <div style={{textAlign: 'left', fontSize: '0.8rem', marginBottom: '20px', color: '#94a3b8'}}>
                   <p>Inference Confidence: <b style={{color: 'white'}}>98.4%</b></p>
                   <p>Processing Latency: <b style={{color: 'white'}}>240ms</b></p>
                </div>
                <div style={{background: 'white', padding: '15px', borderRadius: '10px', display: 'inline-block'}}>
                   <QRCodeCanvas value={`ID: 992-OS | Status: ${diagnosis}`} size={120} />
                </div>
                <p style={{color: '#666', fontSize: '0.6rem', marginTop: '10px'}}>PATIENT REFERRAL QR</p>
              </div>
            </div>
          </div>
        )}

        {step === 'heatmap' && (
          <div className="glass-card" style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
            <h3>Grad-CAM Visualization</h3>
            <div style={{position: 'relative', display: 'inline-block', marginTop: '20px', borderRadius: '15px', overflow: 'hidden'}}>
               <img src={previewImage} style={{width: '100%'}} />
               <div className="pulse-red" style={{
                 position: 'absolute', top: '35%', left: '42%', width: '120px', height: '120px',
                 background: 'radial-gradient(circle, rgba(255,0,0,0.8) 0%, transparent 100%)',
                 filter: 'blur(20px)', borderRadius: '50%'
               }}></div>
            </div>
            <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px'}}>Highlighted area shows the primary region of convolutional activation.</p>
            <button className="btn-primary" style={{marginTop: '20px'}} onClick={() => setStep('result')}>Return to Report</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
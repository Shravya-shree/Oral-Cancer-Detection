import React, { useState } from 'react';
import { CloudUpload } from 'lucide-react';

const UploadPage = ({ onUploadFinished }) => {
  const [image, setImage] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const startDetection = () => {
    // Simulation logic: In a real app, this sends data to your Python backend
    // For this demo, let's randomly choose cancer or no-cancer
    const outcome = Math.random() > 0.5 ? 'cancer' : 'no-cancer';
    onUploadFinished(outcome);
  };

  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <h1>Step 1: Upload Patient Image</h1>
      <div style={{ margin: '30px 0', padding: '40px', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '20px' }}>
        {!image ? (
          <label style={{ cursor: 'pointer' }}>
            <CloudUpload size={50} color="var(--teal-accent)" />
            <p>Click to select oral cavity photo</p>
            <input type="file" style={{ display: 'none' }} onChange={handleFile} />
          </label>
        ) : (
          <div>
            <img src={image} alt="Preview" style={{ maxWidth: '300px', borderRadius: '10px' }} />
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button className="btn-primary" onClick={() => setImage(null)} style={{ background: '#444' }}>Change</button>
              <button className="btn-primary" onClick={startDetection}>Run AI Detection</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;

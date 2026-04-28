import React from 'react';
import { Activity } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-screen">
      <div className="glass-card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div style={{ background: 'rgba(20, 184, 166, 0.2)', padding: '15px', borderRadius: '15px', display: 'inline-block', marginBottom: '20px' }}>
          <Activity size={40} color="#14b8a6" />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>OralScan AI</h1>
        <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>Secure Medical Portal</p>
        
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <input type="email" placeholder="Email" className="glass-card" style={{ width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '10px' }} />
          <input type="password" placeholder="Password" className="glass-card" style={{ width: '100%', padding: '15px', marginBottom: '25px', borderRadius: '10px' }} />
          <button className="btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
import React from 'react';

const Pricing = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="section-title">Pricing <span className="text-gradient">Plans</span></h1>
      <p className="section-subtitle" style={{ marginBottom: '40px' }}>Simple, transparent pricing for every rider.</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ padding: '30px', width: '300px', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
          <h3>Pay As You Go</h3>
          <p className="text-gradient" style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>$5<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/hr</span></p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px' }}>✓ Standard bikes only</li>
            <li style={{ marginBottom: '10px' }}>✓ Pay per hour</li>
            <li style={{ marginBottom: '10px' }}>✓ No commitment</li>
          </ul>
          <button className="btn btn-glass" style={{ marginTop: 'auto' }}>Choose Plan</button>
        </div>

        <div className="glass-panel" style={{ padding: '30px', width: '300px', borderRadius: '16px', border: '1px solid var(--primary)', display: 'flex', flexDirection: 'column' }}>
          <h3>Pro Commuter</h3>
          <p className="text-gradient" style={{ fontSize: '2rem', fontWeight: 'bold', margin: '20px 0' }}>$49<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', color: 'var(--text-secondary)' }}>
            <li style={{ marginBottom: '10px' }}>✓ Access to E-Bikes</li>
            <li style={{ marginBottom: '10px' }}>✓ Unlimited 2hr rides</li>
            <li style={{ marginBottom: '10px' }}>✓ Priority support</li>
          </ul>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

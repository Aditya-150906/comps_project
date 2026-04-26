import React from 'react';

const Locations = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 className="section-title">Our <span className="text-gradient">Locations</span></h1>
      <p className="section-subtitle" style={{ marginBottom: '40px' }}>Find a VELOMOVE station near you.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', width: '80%', maxWidth: '1000px' }}>
        {['Downtown Plaza', 'Central Station', 'Tech Park', 'University Campus'].map((loc, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '20px', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '10px' }}>{loc} Station</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>12 Bikes Available • 4 E-Bikes</p>
            <button className="btn btn-glass w-full">View on Map</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;

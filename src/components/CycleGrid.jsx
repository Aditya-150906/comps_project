import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ENDPOINTS } from '../api/config';
import './CycleGrid.css';
import { Battery, Zap, Shield, ChevronRight, Terminal } from 'lucide-react';

const CycleCard = ({ cycle, index }) => (
  <motion.div 
    className="cycle-card glass-panel"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <div className="card-image-box">
      <img src={cycle.img} alt={cycle.name} className="card-image" />
      <div className="card-badge">{cycle.type}</div>
    </div>
    <div className="card-content">
      <div className="card-header">
        <h3>{cycle.name}</h3>
        <p className="price"><span className="text-gradient">${cycle.price}</span>/hr</p>
      </div>
      <div className="card-specs">
        {cycle.range !== 'N/A' && (
          <div className="spec"><Battery size={14}/> {cycle.range}</div>
        )}
        {cycle.speed !== 'N/A' && (
          <div className="spec"><Zap size={14}/> {cycle.speed}</div>
        )}
        <div className="spec"><Shield size={14}/> Secured</div>
      </div>
      <button className="btn btn-glass w-full mt-4 flex-between card-btn">
        <span>INIT_BOOKING</span> <ChevronRight size={16}/>
      </button>
    </div>
  </motion.div>
);

const CycleGrid = () => {
  const [cycles, setCycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCycles = async () => {
      try {
        // Fetch from backend using centralized config
        const response = await fetch(ENDPOINTS.CYCLES);
        if (!response.ok) {
          throw new Error(`Failed to fetch cycles: ${response.statusText || response.status}`);
        }
        const data = await response.json();
        setCycles(data);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCycles();
  }, []);

  return (
    <section className="cycle-grid-section" id="fleet">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Terminal size={14} className="badge-icon" />
            <span>sys.fleet_inventory</span>
          </div>
          <h2 className="section-title">Explore The <span className="text-gradient">Hardware</span></h2>
          <p className="section-subtitle">High-performance cycles curated for every environment.</p>
        </motion.div>
      </div>
      
      <div className="grid-container">
        {loading ? (
          <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-secondary)' }}>Loading fleet data...</p>
        ) : error ? (
          <div style={{ textAlign: 'center', width: '100%', color: '#ff4d4f', padding: '20px', background: 'rgba(255, 77, 79, 0.1)', borderRadius: '8px', border: '1px solid rgba(255, 77, 79, 0.3)' }}>
            <p style={{ fontWeight: 'bold' }}>API Connection Error</p>
            <p>{error}</p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>Make sure the backend is running on http://localhost:5000</p>
          </div>
        ) : cycles.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-secondary)' }}>No cycles found in the fleet.</p>
        ) : (
          cycles.map((c, idx) => <CycleCard cycle={c} key={c._id || c.id} index={idx} />)
        )}
      </div>
    </section>
  );
};

export default CycleGrid;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ENDPOINTS } from '../api/config';
import './CycleGrid.css';
import { Battery, Zap, Shield, ChevronRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const CycleCard = ({ cycle, index }) => (
  <motion.div 
    className="cycle-card glass-panel"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8 }}
  >
    <div className="card-image-box">
      <img 
        src={cycle.img || "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800"} 
        alt={cycle.name} 
        className="card-image" 
      />
      <div className="card-badge">{cycle.type || 'Electric'}</div>
    </div>

    <div className="card-content">
      <div className="card-header">
        <h3 className="card-title">{cycle.name || 'Premium e-Bike'}</h3>
        <div className="card-price">
          <span className="price-value">${cycle.price || '15'}</span>
          <span className="price-unit">/hr</span>
        </div>
      </div>

      <div className="card-stats">
        {cycle.range_km && (
          <div className="stat-item">
            <Battery size={16} />
            <span>{cycle.range_km} km</span>
          </div>
        )}
        {cycle.speed && (
          <div className="stat-item">
            <Zap size={16} />
            <span>{cycle.speed} km/h</span>
          </div>
        )}
        <div className="stat-item">
          <Shield size={16} />
          <span>Insured</span>
        </div>
      </div>
      
      <motion.button 
        className="book-btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        INIT_BOOKING
        <ChevronRight size={18} />
      </motion.button>
    </div>
  </motion.div>
);

const CycleGrid = () => {
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    fetch(ENDPOINTS.CYCLES)
      .then(res => res.json())
      .then(data => setCycles(data))
      .catch(err => console.error("Failed to fetch cycles", err));
  }, []);

  const displayData = Array.isArray(cycles) && cycles.length > 0 
    ? cycles 
    : [
        { id: 1, name: 'City Cruiser X', price: 15, range_km: 45, speed: 25, type: 'Electric', img: 'https://images.unsplash.com/photo-1571188654261-29e28f3bb222?auto=format&fit=crop&q=80&w=800' },
        { id: 2, name: 'Mountain Pro', price: 22, range_km: 60, speed: 30, type: 'Performance', img: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80&w=800' },
        { id: 3, name: 'Urban Glide', price: 12, range_km: 35, speed: 20, type: 'Standard', img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800' },
        { id: 4, name: 'Speedster V2', price: 28, range_km: 80, speed: 45, type: 'Sport', img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=800' }
      ];

  return (
    <div className="cycle-grid-section">
      <div className="grid-container">
        {displayData.map((c, idx) => (
          <CycleCard key={c.id || idx} cycle={c} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default CycleGrid;
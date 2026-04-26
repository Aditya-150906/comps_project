import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <Terminal size={14} className="badge-icon" />
            <span>v2.0.4 // HYPER_DRIVE</span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Redefining Urban <br />
          <span className="text-gradient">Mobility</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rent premium e-bikes, mountain bikes, and city cruisers. Move faster, cleaner, and smarter through the concrete jungle.
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/fleet')}>
            Find a Ride <ArrowRight size={20} />
          </button>
          <button className="btn btn-glass btn-lg" onClick={() => navigate('/pricing')}>View Pricing</button>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">Premium Bikes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">City Locations</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">10k+</span>
            <span className="stat-label">Happy Riders</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="hero-image-wrapper glass-panel">
          <div className="glow-effect"></div>
          <img src="/hero_bike.png" alt="Premium Electric Bike" className="hero-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Mail, MessageCircle, Globe, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-text">VELO<span className="text-gradient">MOVE</span></span>
          </div>
          <p className="footer-desc">High-performance mobility for the urban grid. Operate with precision.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Globe size={20} /></a>
            <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            <a href="#" className="social-icon"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>// MODULES</h4>
          <Link to="/fleet">Hardware_Fleet</Link>
          <Link to="/locations">Grid_Locations</Link>
          <Link to="/pricing">Access_Levels</Link>
        </div>
        
        <div className="footer-links">
          <h4>// COMMS</h4>
          <a href="#">Help_Protocol</a>
          <a href="#">Safety_Directives</a>
          <a href="#">Ping_Us</a>
        </div>
        
        <div className="footer-newsletter">
          <h4>sys.updates</h4>
          <p>Initialize subscription to receive patches and hardware news.</p>
          <div className="input-group">
            <input type="email" placeholder="root@localhost" className="email-input" />
            <button className="btn btn-primary btn-sm">INIT</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VeloMove Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

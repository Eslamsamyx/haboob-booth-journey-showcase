import { Link } from 'react-router-dom';
import { Home, Map } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/" className="footer-nav-link">
            <Home size={18} />
            Dashboard
          </Link>
          <Link to="/journey" className="footer-nav-link">
            <Map size={18} />
            Visitor Journey
          </Link>
        </nav>
        <div className="footer-branding">
          <span className="footer-text">Powered by KayanLive</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

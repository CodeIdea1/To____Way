'use client';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/footer.module.css';
import { smoothNavigate } from '../utils/smoothNavigate';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothNavigate(targetId);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}><span className={styles.logoGold}>To</span> way</div>
        
        <nav className={styles.links}>
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a>
          <a href="#explore" onClick={(e) => handleLinkClick(e, '#explore')}>Explore</a>
          <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')}>Journey</a>
          <a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')}>Menu</a>
          <a href="#hours" onClick={(e) => handleLinkClick(e, '#hours')}>Hours</a>
          <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>Testimonials</a>
        </nav>

        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/towaycoffee/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://maps.app.goo.gl/AMvFUSKMqqb6d5fd7?g_st=ic" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt />
          </a>
        </div>

        <div className={styles.divider}></div>

        <p className={styles.copyright}>
          © Copyright 2026 - To way. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}><span className={styles.logoGold}>To</span> way</div>
        
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/about">About</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
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

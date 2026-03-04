'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLLIElement[]>([]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(targetId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 700);
  };

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          duration: 1.5,
          ease: 'power3.inOut'
        });
        gsap.fromTo(linksRef.current, 
          { rotateX: 90 },
          { 
            rotateX: 0,
            duration: 1,
            stagger: 0.15,
            delay: 0.3,
            ease: 'power3.out'
          }
        );
      } else {
        gsap.to(menuRef.current, {
          y: '-100%',
          duration: 0.7,
          ease: 'power4.inOut'
        });
        gsap.to(linksRef.current, {
          rotateX: 90,
          duration: 0.3
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoGold}>To</span>{' '}
          <span className={styles.logoWhite}>way</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>
      
      <div ref={menuRef} className={styles.menu}>
        <ul className={styles.menuList}>
          <li ref={(el) => { if (el) linksRef.current[0] = el; }}><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
          <li ref={(el) => { if (el) linksRef.current[1] = el; }}><a href="#explore" onClick={(e) => handleLinkClick(e, '#explore')}>Explore</a></li>
          <li ref={(el) => { if (el) linksRef.current[2] = el; }}><a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')}>Journey</a></li>
          <li ref={(el) => { if (el) linksRef.current[3] = el; }}><a href="#menu" onClick={(e) => handleLinkClick(e, '#menu')}>Menu</a></li>
          <li ref={(el) => { if (el) linksRef.current[4] = el; }}><a href="#hours" onClick={(e) => handleLinkClick(e, '#hours')}>Hours</a></li>
          <li ref={(el) => { if (el) linksRef.current[5] = el; }}><a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')}>Testimonials</a></li>
        </ul>
      </div>
    </>
  );
}

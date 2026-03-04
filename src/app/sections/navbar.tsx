'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/navbar.module.css';
import { smoothNavigate } from '../utils/smoothNavigate';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [wayColor, setWayColor] = useState('white');
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLLIElement[]>([]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      smoothNavigate(targetId);
    }, 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentColor = 'white';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          const styles = window.getComputedStyle(section);
          let bgColor = styles.backgroundColor;
          
          if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
            let parent = section.parentElement;
            while (parent && (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent')) {
              bgColor = window.getComputedStyle(parent).backgroundColor;
              parent = parent.parentElement;
            }
          }
          
          const rgb = bgColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            currentColor = brightness > 128 ? 'black' : 'white';
          }
        }
      });
      
      setWayColor(currentColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <span style={{ color: wayColor, transition: 'color 0.3s ease' }}>way</span>
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

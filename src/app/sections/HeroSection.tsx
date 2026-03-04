'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/herosection.module.css';
import { smoothNavigate } from '../utils/smoothNavigate';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    smoothNavigate('#menu-section');
  };

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current, {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });
  }, []);

  return (
    <section className={styles.hero}>
      <video 
        className={styles.video}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div  
        className={styles.overlay}
        style={{ backgroundImage: 'url(/hero-overlay.png)' }}
      />
      <div className={styles.shadow} />
      <div ref={contentRef} className={styles.content}>
        <img src="/badge.svg" alt="badge" className={styles.badge} />
        <h1 className={styles.title}>
          <span className={styles.titleGold}>To</span>{' '}
          <span className={styles.titleWhite}>way</span>
        </h1>
        <img src="/separator-white.svg" alt="separator" className={styles.separator} />
        <p className={styles.description}>
          Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
        </p>
        <button className={styles.button} onClick={scrollToMenu}>Our menu</button>
      </div>
    </section>
  );
}

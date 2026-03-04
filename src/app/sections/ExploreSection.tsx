'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/explore.module.css';
import { cloudinaryImages } from '../utils/cloudinaryImages';

gsap.registerPlugin(ScrollTrigger);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cupsRef = useRef<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const createSplash = (color: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    for (let i = 0; i < 30; i++) {
      particlesRef.current.push({
        x: centerX,
        y: centerY,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 15 - 5,
        size: Math.random() * 8 + 3,
        alpha: 1,
        color
      });
    }
  };

  const animateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.vx *= 0.98;
      p.alpha -= 0.015;

      if (p.alpha > 0) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // رسم قطرة ماء بدلاً من دائرة
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(0.5, p.color + 'CC');
        gradient.addColorStop(1, p.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 1.3, Math.atan2(p.vy, p.vx), 0, Math.PI * 2);
        ctx.fill();
        
        // إضافة لمعة صغيرة
        ctx.globalAlpha = p.alpha * 0.6;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        return true;
      }
      return false;
    });

    if (particlesRef.current.length > 0) {
      requestAnimationFrame(animateParticles);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 400;
      canvas.height = 600;
    }
  }, []);

  useEffect(() => {
    if (sectionRef.current && cupsRef.current.length) {
      const cups = cupsRef.current;
      const colors = ['#8B4513', '#D2691E', '#D9D0B3', '#FC7154'];
      const isMobile = window.innerWidth <= 768;
      
      gsap.set(cups[0], { y: 0, scale: 1, opacity: 1 });
      gsap.set(cups.slice(1), { y: '200%', scale: 0.8, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? '20% top' : 'top top',
          end: isMobile ? '+=400%' : '+=600%',
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / 3,
            duration: { min: 0.3, max: 0.8 },
            ease: 'power2.inOut'
          }
        }
      });

      
      tl.to(cups[0], { y: 0, duration: 2 })
        .to(cups[0], { y: '-150%', scale: 0.8, opacity: 0, duration: 1, ease: 'back.in(1.2)' })
        .to(cups[1], { 
          y: 0, 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          ease: 'back.out(1.4)',
          onStart: () => {
            createSplash(colors[1]);
            animateParticles();
          }
        }, '<0.5')
        .to(cups[1], { y: 0, duration: 2 })
        .to(cups[1], { y: '-150%', scale: 0.8, opacity: 0, duration: 1, ease: 'back.in(1.2)' })
        .to(cups[2], { 
          y: 0, 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          ease: 'back.out(1.4)',
          onStart: () => {
            createSplash(colors[2]);
            animateParticles();
          }
        }, '<0.5')
        .to(cups[2], { y: 0, duration: 2 })
        .to(cups[2], { y: '-150%', scale: 0.8, opacity: 0, duration: 1, ease: 'back.in(1.2)' })
        .to(cups[3], { 
          y: 0, 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          ease: 'back.out(1.4)',
          onStart: () => {
            createSplash(colors[3]);
            animateParticles();
          }
        }, '<0.5')
        .to(cups[3], { y: 0, duration: 2 });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section ref={sectionRef} className={styles.explore}>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.item}>
            <img src={cloudinaryImages['coffee-1.svg']} alt="coffee" className={styles.icon} />
            <h3 className={styles.title}>Rich Espresso Blends</h3>
            <p className={styles.description}>
              Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.
            </p>
          </div>
          <div className={styles.item}>
            <img src={cloudinaryImages['coffee-2.svg']} alt="coffee" className={styles.icon} />
            <h3 className={styles.title}>Classic Drip Coffee</h3>
            <p className={styles.description}>
              Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.
            </p>
          </div>
        </div>

        <div className={styles.columnCenter}>
          <div className={styles.cupContainer}>
            <canvas ref={canvasRef} className={styles.splashCanvas} />
            <img ref={(el) => { if (el) cupsRef.current[0] = el; }} src={cloudinaryImages['cup1-1.svg']} alt="cup" className={styles.cupImage} />
            <img ref={(el) => { if (el) cupsRef.current[1] = el; }} src={cloudinaryImages['cup2-1.svg']} alt="cup" className={styles.cupImage} />
            <img ref={(el) => { if (el) cupsRef.current[2] = el; }} src={cloudinaryImages['cup3-1.svg']} alt="cup" className={styles.cupImage} />
            <img ref={(el) => { if (el) cupsRef.current[3] = el; }} src={cloudinaryImages['cupp4-1.svg']} alt="cup" className={styles.cupImage} />
          </div>
        </div>


        <div className={styles.column}>
          <div className={styles.item}>
            <img src={cloudinaryImages['coffee-3.svg']} alt="coffee" className={styles.icon} />
            <h3 className={styles.title}>Smooth Cold Brews</h3>
            <p className={styles.description}>
              Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.
            </p>
          </div>
          <div className={styles.item}>
            <img src={cloudinaryImages['coffee-4.svg']} alt="coffee" className={styles.icon} />
            <h3 className={styles.title}>Flavorful Latte Varieties</h3>
            <p className={styles.description}>
              Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

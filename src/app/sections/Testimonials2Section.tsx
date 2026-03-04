'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/testimonials2.module.css';

gsap.registerPlugin(ScrollTrigger);

const cardStyles = [
  { bg: 'linear-gradient(135deg, #6B4423 0%, #8B5A3C 100%)', color: 'white', imagePos: 'bottom', starColor: '#D4B896' },
  { bg: 'linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)', color: '#2c1810', imagePos: 'top', border: '2px solid #6B4423', starColor: '#6B4423' },
  { bg: 'linear-gradient(135deg, #2c1810 0%, #4a2f1f 100%)', color: 'white', imagePos: 'bottom', starColor: '#D1B08E' },
  { bg: 'linear-gradient(135deg, #8B5A3C 0%, #A0694F 100%)', color: 'white', imagePos: 'top', starColor: '#C8A17A' },
  { bg: 'linear-gradient(135deg, #4a2f1f 0%, #6B4423 100%)', color: 'white', imagePos: 'bottom', starColor: '#D4B896' },
  { bg: 'linear-gradient(135deg, #D1B08E 0%, #C8A17A 100%)', color: '#2c1810', imagePos: 'top', border: '2px solid #8B5A3C', starColor: '#6B4423' },
  { bg: 'linear-gradient(135deg, #C8A17A 0%, #D4B896 100%)', color: 'white', imagePos: 'bottom', starColor: '#8B5A3C' },
];

const testimonials = [
  {
    quote: "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    author: "Alice Johnson",
    role: "Graphic Designer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
  },
  {
    quote: "Best coffee shop in town! The quality is consistently excellent and the staff is always friendly and welcoming.",
    author: "Michael Chen",
    role: "Software Engineer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    quote: "A hidden gem! The ambiance is cozy and the coffee is expertly crafted. I come here every morning.",
    author: "Sarah Williams",
    role: "Marketing Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    quote: "Outstanding service and incredible coffee. This place has become my second home for meetings and creative work.",
    author: "David Brown",
    role: "Entrepreneur",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    quote: "The perfect spot for coffee lovers! Every cup is crafted with care and passion. Highly recommended!",
    author: "Emma Davis",
    role: "Content Creator",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  },
  {
    quote: "Amazing atmosphere and even better coffee. The staff really knows their craft and it shows in every drink.",
    author: "James Wilson",
    role: "Architect",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
  },
  {
    quote: "I've tried many coffee shops, but this one stands out. The quality and consistency are unmatched.",
    author: "Sophia Martinez",
    role: "Teacher",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
  },
  {
    quote: "A wonderful place to relax and enjoy premium coffee. The ambiance is warm and inviting.",
    author: "Oliver Taylor",
    role: "Photographer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
  },
  {
    quote: "Exceptional coffee and friendly service. This is my go-to place for both work and leisure.",
    author: "Isabella Anderson",
    role: "Writer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop"
  }
];

export default function Testimonials2Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // كل كارت يثبت لفترة طويلة أثناء السكرول
      const scrollLength = cards.length * 150; // فترة سكرول طويلة لكل كارت
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollLength}%`,
          pin: true,
          scrub: 1,
        }
      });

      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: 0,
          scale: 0.9,
        });

        const startTime = i * 3; // بداية ظهور الكارت
        const holdTime = 2.5; // فترة ثبات الكارت
        const exitTime = 0.5; // فترة الخروج

        // ظهور الكارت
        tl.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        }, startTime)
        // ثبات الكارت لفترة طويلة
        .to(card, {
          duration: holdTime
        })
        // اختفاء الكارت
        .to(card, {
          opacity: 0,
          scale: 0.9,
          duration: exitTime,
          ease: 'power2.in'
        });
      });
    } else {
      // أنيميشن للديسكتوب: التأثير الأصلي
      const positions: number[] = [12, 68, 38, 75, 20, 55, 8, 65, 42];
      const speeds: number[] = [2.2, 1.6, 2.8, 1.9, 2.5, 1.8, 2.0, 2.4, 1.7];
      const verticalOffsets: number[] = [25, 15, 35, 20, 30, 18, 28, 22, 32];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1.5,
        }
      });
      
      cards.forEach((card, i) => {
        let xPos: number = positions[i % positions.length];
        let yPos: number = verticalOffsets[i % verticalOffsets.length];
        
        if (i === 2) yPos = -10;
        if (i === 4) yPos = 12;
        if (i === 7) yPos = -5;
        
        const startY: number = window.innerHeight + 300;
        const endY: number = -(window.innerHeight + 400);
        const xOffset: number = gsap.utils.random(-3, 3);
        
        gsap.set(card, {
          left: `${xPos}%`,
          top: `${yPos}%`,
          y: startY,
          willChange: 'transform'
        });
        
        tl.to(card, {
          y: endY,
          x: xOffset,
          ease: 'none',
          duration: speeds[i % speeds.length]
        }, i * 0.25);
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.testimonials2}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => {
            const cardStyle = cardStyles[index % cardStyles.length];
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={styles.card}
                style={{
                  background: cardStyle.bg,
                  color: cardStyle.color,
                  border: cardStyle.border || 'none'
                }}
              >
                {cardStyle.imagePos === 'top' && (
                  <>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className={styles.image}
                        style={{ borderColor: cardStyle.color === 'white' ? 'rgba(255, 255, 255, 0.3)' : cardStyle.starColor }}
                      />
                    </div>
                    <div className={styles.stars} style={{ color: cardStyle.starColor }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} size={16} />
                      ))}
                    </div>
                    <p className={styles.quote}>{testimonial.quote}</p>
                    <h3 className={styles.author}>{testimonial.author}</h3>
                    <p className={styles.role}>{testimonial.role}</p>
                  </>
                )}
                {cardStyle.imagePos === 'bottom' && (
                  <>
                    <div className={styles.stars} style={{ color: cardStyle.starColor }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} size={16} />
                      ))}
                    </div>
                    <p className={styles.quote}>{testimonial.quote}</p>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className={styles.image}
                        style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                      />
                    </div>
                    <h3 className={styles.author}>{testimonial.author}</h3>
                    <p className={styles.role}>{testimonial.role}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

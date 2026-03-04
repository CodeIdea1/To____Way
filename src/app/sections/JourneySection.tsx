'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/journey.module.css';
import { cloudinaryImages } from '../utils/cloudinaryImages';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    title: 'Our Journey',
    description: 'Founded in 2024, To way started as a small café with a vision for exceptional coffee. Now a beloved brand, we\'re known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time',
    image: cloudinaryImages['OurJourney3.jpg']
  },
  {
    title: 'Our Promise',
    description: 'At To way, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.',
    image: cloudinaryImages['OurPromise.jpg']
  },
  {
    title: 'Our Team',
    description: 'At To way, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.',
    image: cloudinaryImages['ourteam.jpg']
  }
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(wrapper, {
      x: -scrollWidth,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.journey}>
      <div ref={wrapperRef} className={styles.wrapper}>
        {journeyData.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <img src={cloudinaryImages['badge.svg']} alt="badge" className={styles.badge} />
              <h2 className={styles.title}>
                <span className={styles.titleGold}>{item.title.split(' ')[0]}</span>{' '}
                <span className={styles.titleBlack}>{item.title.split(' ')[1]}</span>
              </h2>
              <img src={cloudinaryImages['separator-white.svg']} alt="separator" className={styles.separator} />
              <p className={styles.description}>{item.description}</p>
              <button className={styles.button}>See more</button>
            </div>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.title} className={styles.image} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

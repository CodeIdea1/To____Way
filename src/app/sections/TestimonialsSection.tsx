'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import 'swiper/css';
import styles from '../styles/testimonials.module.css';

const testimonials = [
  {
    quote: "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    author: "Alice Johnson",
    role: "Graphic Designer",
    rating: 5
  },
  {
    quote: "Best coffee shop in town! The quality is consistently excellent and the staff is always friendly and welcoming.",
    author: "Michael Chen",
    role: "Software Engineer",
    rating: 5
  },
  {
    quote: "A hidden gem! The ambiance is cozy and the coffee is expertly crafted. I come here every morning.",
    author: "Sarah Williams",
    role: "Marketing Manager",
    rating: 5
  },
  {
    quote: "Outstanding service and incredible coffee. This place has become my second home for meetings and creative work.",
    author: "David Brown",
    role: "Entrepreneur",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 512 512" 
          className={styles.quoteIcon}
          height="1em" 
          width="1em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z"></path>
        </svg>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.testimonial}>
                <p className={styles.quote}>{testimonial.quote}</p>
                <h3 className={styles.author}>{testimonial.author}</h3>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button 
          className={`${styles.navButton} ${styles.prevButton} swiper-button-prev-custom ${isBeginning ? styles.inactive : styles.active}`}
        >
          <IoChevronBack />
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton} swiper-button-next-custom ${isEnd ? styles.inactive : styles.active}`}
        >
          <IoChevronForward />
        </button>
      </div>
    </section>
  );
}

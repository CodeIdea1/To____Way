import styles from '../styles/hours.module.css';

export default function HoursSection() {
  return (
    <section className={styles.hours}>
      <div className={styles.imageBox} style={{ backgroundImage: 'url(/place2.jpg)' }}>
        <div className={styles.overlayLight} />
        <img src="/badge.svg" alt="badge" className={styles.badge} />
      </div>
      
      <div className={styles.imageBox} style={{ backgroundImage: 'url(/hours.jpg)' }}>
        <div className={styles.overlayDark} />
        <div className={styles.content}>
          <h2 className={styles.title}>Opening Hours</h2>
          <img src="/separator-accent.svg" alt="separator" className={styles.separator} />
          <img src="/toway hours.svg" alt="schedule" className={styles.schedule} />
        </div>
      </div>
    </section>
  );
}

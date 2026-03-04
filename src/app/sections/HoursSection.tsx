import styles from '../styles/hours.module.css';
import { cloudinaryImages } from '../utils/cloudinaryImages';

export default function HoursSection() {
  return (
    <section className={styles.hours}>
      <div className={styles.imageBox} style={{ backgroundImage: `url(${cloudinaryImages['place2.jpg']})` }}>
        <div className={styles.overlayLight} />
        <img src={cloudinaryImages['badge.svg']} alt="badge" className={styles.badge} />
      </div>
      
      <div className={styles.imageBox} style={{ backgroundImage: `url(${cloudinaryImages['hours.jpg']})` }}>
        <div className={styles.overlayDark} />
        <div className={styles.content}>
          <h2 className={styles.title}>Opening Hours</h2>
          <img src={cloudinaryImages['separator-accent.svg']} alt="separator" className={styles.separator} />
          <img src={cloudinaryImages['toway hours.svg']} alt="schedule" className={styles.schedule} />
        </div>
      </div>
    </section>
  );
}

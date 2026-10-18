import Reveal from './Reveal';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
    return (
        <Reveal className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </Reveal>
    );
}

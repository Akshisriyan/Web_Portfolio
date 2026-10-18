import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { awards } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './Awards.module.css';

export default function Awards() {
    return (
        <section className="section" id="awards">
            <div className="container">
                <SectionHeading eyebrow="Achievements" title="Awards, research & leadership" />

                <div className={styles.grid}>
                    {awards.map((award, i) => (
                        <Reveal key={award.title} delay={i * 0.08} className={`card card-hover ${styles.card}`}>
                            <div className={styles.top}>
                                <span className={styles.icon}>
                                    <FontAwesomeIcon icon={award.icon} />
                                </span>
                                <span className={styles.kind}>{award.kind}</span>
                            </div>
                            <h3>{award.title}</h3>
                            {award.text && <p>{award.text}</p>}
                            {award.items && (
                                <ul className={styles.items}>
                                    {award.items.map((it) => (
                                        <li key={it}>{it}</li>
                                    ))}
                                </ul>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

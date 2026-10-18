import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './Education.module.css';

export default function Education() {
    return (
        <section className="section section-alt" id="education">
            <div className="container">
                <SectionHeading eyebrow="Background" title="Education" />

                <div className={styles.grid}>
                    {education.map((edu, i) => (
                        <Reveal key={edu.degree} delay={i * 0.08} className={`card card-hover ${styles.card}`}>
                            <div className={styles.top}>
                                <span className="icon-box">
                                    <FontAwesomeIcon icon={edu.icon} />
                                </span>
                                <span className={styles.period}>{edu.period}</span>
                            </div>

                            <h3 className={styles.degree}>{edu.degree}</h3>
                            <p className={styles.school}>{edu.school}</p>

                            <div className={styles.badges}>
                                {edu.badges.map((b) => (
                                    <span key={b} className={styles.badge}>{b}</span>
                                ))}
                            </div>

                            {edu.courses && (
                                <p className={styles.courses}>
                                    <strong>Coursework:</strong> {edu.courses}
                                </p>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

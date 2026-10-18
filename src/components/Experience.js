import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeading
                    eyebrow="Career"
                    title="Work experience"
                    subtitle="Building production systems across retail, point-of-sale and testing software."
                />

                <ol className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <Reveal as="li" key={exp.title} delay={i * 0.1} className={styles.item}>
                            <span className={`${styles.marker} ${exp.current ? styles.markerCurrent : ''}`} aria-hidden="true">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </span>

                            <div className={`card ${styles.body}`}>
                                <header className={styles.head}>
                                    <div>
                                        <h3>{exp.title}</h3>
                                        <p className={styles.company}>{exp.company}</p>
                                    </div>
                                    <div className={styles.meta}>
                                        {exp.current && <span className={styles.current}>Current</span>}
                                        <span className={styles.period}>{exp.period}</span>
                                    </div>
                                </header>

                                <ul className={styles.projects}>
                                    {exp.projects.map((p) => (
                                        <li key={p.name}>
                                            <h4>{p.name}</h4>
                                            <div className={styles.tech}>
                                                {p.tech.map((t) => (
                                                    <span key={t} className="chip">{t}</span>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillGroups } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <SectionHeading
                    eyebrow="Toolkit"
                    title="Skills & technologies"
                    subtitle="The languages, frameworks and platforms I use to ship software."
                />

                <div className={styles.grid}>
                    {skillGroups.map((group, i) => (
                        <Reveal key={group.title} delay={i * 0.08} className={`card card-hover ${styles.group}`}>
                            <div className={styles.head}>
                                <span className="icon-box">
                                    <FontAwesomeIcon icon={group.icon} />
                                </span>
                                <h3>{group.title}</h3>
                            </div>
                            <ul className={styles.list}>
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

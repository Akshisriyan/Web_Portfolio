import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { profile, services } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
    return (
        <section className="section section-alt" id="about">
            <div className="container">
                <SectionHeading eyebrow="About me" title="Passionate developer & problem solver" />

                <div className={styles.layout}>
                    <Reveal className={`card ${styles.bio}`}>
                        <p className={styles.intro}>
                            I&apos;m an <strong>Associate Software Engineer</strong> building applications with{' '}
                            <strong>C#, .NET, ASP.NET MVC</strong> and <strong>Java Spring Boot</strong>.
                        </p>
                        <p>
                            I&apos;ve worked on backend development with SQL and PL/SQL, and I build mobile apps with
                            Flutter, Firebase and MongoDB. I&apos;m comfortable with agile ways of working and enjoy
                            collaborating in teams to create effective software.
                        </p>
                        <p>I&apos;m eager to keep learning and to apply my skills to real-world projects.</p>

                        <ul className={styles.facts}>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                {profile.location}
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <a href={profile.phones[0].href}>{profile.phones[0].label}</a>
                            </li>
                        </ul>
                    </Reveal>

                    <div className={styles.services}>
                        {services.map((s, i) => (
                            <Reveal key={s.title} delay={i * 0.08} className={`card card-hover ${styles.service}`}>
                                <span className="icon-box">
                                    <FontAwesomeIcon icon={s.icon} />
                                </span>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

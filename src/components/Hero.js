import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { profile, stats } from '@/data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.glowA} />
                <div className={styles.glowB} />
                <div className={styles.grid} />
            </div>

            <div className={`container ${styles.inner}`}>
                <div className={styles.copy}>
                    <p className={`${styles.rise} ${styles.badge}`} style={{ '--d': '0.10s' }}>
                        <span className={styles.pulse} />
                        Available for new opportunities
                    </p>

                    <h1 className={`${styles.rise} ${styles.title}`} style={{ '--d': '0.18s' }}>
                        Hi, I&apos;m {profile.firstName}.
                        <br />
                        I build <span className={styles.accent}>reliable software</span> for web, mobile &amp; data.
                    </h1>

                    <p className={`${styles.rise} ${styles.lead}`} style={{ '--d': '0.26s' }}>
                        {profile.role} working with <strong>.NET</strong>, <strong>Java Spring Boot</strong>,{' '}
                        <strong>Next.js</strong> and <strong>Flutter</strong>. I care about clean code and software
                        that makes a real difference for the people using it.
                    </p>

                    <div className={`${styles.rise} ${styles.ctas}`} style={{ '--d': '0.34s' }}>
                        <a href="#projects" className="btn btn-primary">
                            View my work
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a href="#contact" className="btn btn-ghost">
                            Get in touch
                        </a>
                    </div>

                    <div className={`${styles.rise} ${styles.socials}`} style={{ '--d': '0.42s' }}>
                        <div className="social-row">
                            <a href={profile.github} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href={profile.linkedin} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                        <span className={styles.location}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            {profile.location}
                        </span>
                    </div>
                </div>

                <div className={`${styles.rise} ${styles.visual}`} style={{ '--d': '0.2s' }}>
                    <div className={styles.photoFrame}>
                        <Image
                            src={profile.photo}
                            alt={profile.name}
                            fill
                            priority
                            sizes="(max-width: 900px) 320px, 420px"
                            className={styles.photo}
                        />
                    </div>

                    <div className={`${styles.rise} ${styles.float} ${styles.floatTop}`} style={{ '--d': '0.6s' }}>
                        <span className={styles.floatIcon}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                        <span>
                            <strong>Prime Engineering</strong>
                            <small>Associate SE</small>
                        </span>
                    </div>

                    <div className={`${styles.rise} ${styles.float} ${styles.floatBottom}`} style={{ '--d': '0.75s' }}>
                        <span className={styles.floatEmoji} aria-hidden="true">🎓</span>
                        <span>
                            <strong>MSc Data Analytics</strong>
                            <small>University of Kelaniya</small>
                        </span>
                    </div>
                </div>
            </div>

            <div className="container">
                <dl className={`${styles.rise} ${styles.stats}`} style={{ '--d': '0.55s' }}>
                    {stats.map((s) => (
                        <div key={s.label} className={styles.stat}>
                            <dt>{s.label}</dt>
                            <dd>{s.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { profile, navLinks } from '@/data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <a href="#hero" className={styles.logo}>
                        <span className={styles.mark}>AS</span>
                        {profile.name}
                    </a>
                    <p>Software engineer crafting reliable digital experiences.</p>
                </div>

                <nav aria-label="Footer">
                    <ul className={styles.links}>
                        {navLinks.map((l) => (
                            <li key={l.id}>
                                <a href={`#${l.id}`}>{l.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

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
            </div>

            <div className={`container ${styles.bottom}`}>
                <p>&copy; {year} {profile.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}

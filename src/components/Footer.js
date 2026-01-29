'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <span className={styles.logoText}>AS</span>
                        <p>Software Engineer crafting digital experiences</p>
                    </div>

                    <div className={styles.footerSocial}>
                        <a
                            href="https://github.com/akshithasriyanjith"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://linkedin.com/in/akshithasriyanjith"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href="mailto:akshithasriyanjith2000@gmail.com"
                            aria-label="Email"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Akshitha Sriyanjith. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

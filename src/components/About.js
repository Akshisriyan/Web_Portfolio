'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faRocket,
    faMapMarkerAlt,
    faEnvelope,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './About.module.css';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className={styles.about} id="about" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>About Me</span>
                    <h2 className={styles.sectionTitle}>Passionate Developer & Problem Solver</h2>
                </motion.div>

                <motion.div
                    className={styles.aboutContent}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className={styles.aboutImage} variants={itemVariants}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src="/profile.jpg"
                                    alt="Akshitha Sriyanjith"
                                    fill
                                    sizes="(max-width: 768px) 240px, 320px"
                                    className={styles.profileImage}
                                    priority
                                />
                            </div>
                            <div className={styles.imageDecoration}></div>
                            <div className={styles.imageGlow}></div>
                        </div>
                        <motion.div
                            className={`${styles.floatingCard} ${styles.card1}`}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={faCode} />
                            <span>Clean Code</span>
                        </motion.div>
                        <motion.div
                            className={`${styles.floatingCard} ${styles.card2}`}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={faRocket} />
                            <span>Fast Delivery</span>
                        </motion.div>
                    </motion.div>

                    <motion.div className={styles.aboutText} variants={itemVariants}>
                        <p className={styles.aboutIntro}>
                            I am an <strong>Associate Software Engineer</strong> with experience in building
                            applications using <strong>C#, .NET, ASP.NET MVC</strong>, and <strong>Java Spring Boot</strong>.
                        </p>
                        <p>
                            I have worked on backend development using SQL and PSQL and have skills in developing
                            mobile apps with Flutter, Firebase, and MongoDB. I am familiar with agile methods and
                            enjoy working in teams to create effective software solutions.
                        </p>
                        <p>
                            I am eager to learn and grow in my career by applying my skills to real-world projects.
                        </p>

                        <div className={styles.aboutInfo}>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Colombo, Sri Lanka</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>akshithasriyanjith2000@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+94 71 374 0291</span>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://github.com/akshithasriyanjith"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://linkedin.com/in/akshithasriyanjith"
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a
                                href="mailto:akshithasriyanjith2000@gmail.com"
                                className={styles.socialLink}
                                aria-label="Email"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

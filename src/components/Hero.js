'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Hero.module.css';

export default function Hero() {
    const statsRef = useRef([]);

    useEffect(() => {
        // Animate stats counter
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 30);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.dataset.count);
                        animateCounter(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        statsRef.current.forEach((stat) => {
            if (stat) observer.observe(stat);
        });

        return () => observer.disconnect();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroBg}>
                <div className={`${styles.gradientOrb} ${styles.orb1}`}></div>
                <div className={`${styles.gradientOrb} ${styles.orb2}`}></div>
                <div className={`${styles.gradientOrb} ${styles.orb3}`}></div>
                <div className={styles.gridPattern}></div>
            </div>

            <motion.div
                className={styles.heroContent}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.heroBadge} variants={itemVariants}>
                    <span className={styles.badgeDot}></span>
                    Available for opportunities
                </motion.div>

                <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                    <span className={styles.titleLine}>Hi, I&apos;m</span>
                    <span className={styles.titleName}>Akshitha Sriyanjith</span>
                    <span className={styles.titleRole}>Software Engineer</span>
                </motion.h1>

                <motion.p className={styles.heroDescription} variants={itemVariants}>
                    Building elegant solutions with <span className={styles.highlight}>.NET</span>,
                    <span className={styles.highlight}> Java Spring Boot</span>, and
                    <span className={styles.highlight}> Flutter</span>. Passionate about creating
                    impactful software that makes a difference.
                </motion.p>

                <motion.div className={styles.heroCta} variants={itemVariants}>
                    <a href="#projects" className={styles.btnPrimary}>
                        <span>View My Work</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        <span>Get in Touch</span>
                    </a>
                </motion.div>

                <motion.div className={styles.heroStats} variants={itemVariants}>
                    <div className={styles.statItem}>
                        <span
                            className={styles.statNumber}
                            data-count="6"
                            ref={el => statsRef.current[0] = el}
                        >0</span>+
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                    <div className={styles.statItem}>
                        <span
                            className={styles.statNumber}
                            data-count="2"
                            ref={el => statsRef.current[1] = el}
                        >0</span>+
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statItem}>
                        <span
                            className={styles.statNumber}
                            data-count="15"
                            ref={el => statsRef.current[2] = el}
                        >0</span>+
                        <span className={styles.statLabel}>Technologies</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

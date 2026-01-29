'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Experience.module.css';

const experiences = [
    {
        title: 'Associate Software Engineer',
        company: 'Prime Engineering Lanka (Pvt) Ltd',
        period: 'October 2024 - Present',
        current: true,
        projects: [
            {
                name: 'Stock Retail Centralized System (Web Application)',
                tech: 'Java Spring Boot, Next.js, MySQL, Micro Services',
            },
            {
                name: 'Emission Testing Software',
                tech: '.NET (C#), SQL Server, Crystal Report, Networking, MVC',
            },
        ],
    },
    {
        title: 'Trainee Software Engineer',
        company: 'Prime Engineering Lanka (Pvt) Ltd',
        period: 'April 2024 - October 2024',
        current: false,
        projects: [
            {
                name: 'Point Of Sale Software',
                tech: '.NET (C#) Core, SQL Server, Crystal Report, MVC, Azure Cloud',
            },
            {
                name: 'Stock Count Mobile App',
                tech: 'Flutter, Dart, MS SQL, REST API',
            },
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.experience} id="experience" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Career Path</span>
                    <h2 className={styles.sectionTitle}>Work Experience</h2>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.timelineMarker}>
                                <div className={styles.markerDot}></div>
                                <div className={styles.markerLine}></div>
                            </div>

                            <div className={styles.timelineContent}>
                                <div className={styles.timelineHeader}>
                                    <div className={styles.timelineDate}>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        {exp.period}
                                    </div>
                                    {exp.current && (
                                        <span className={styles.currentBadge}>Current</span>
                                    )}
                                </div>

                                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                                <h4 className={styles.timelineCompany}>{exp.company}</h4>

                                <ul className={styles.timelineTasks}>
                                    {exp.projects.map((project, pIndex) => (
                                        <li key={pIndex}>
                                            <span className={styles.taskIcon}>
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </span>
                                            <div>
                                                <strong>{project.name}</strong>
                                                <p>{project.tech}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

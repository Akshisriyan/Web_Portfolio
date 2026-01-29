'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHotel,
    faHandPointer,
    faGraduationCap,
    faPlane,
    faBraille,
    faUniversity
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Hotel Management System',
        description: 'Complete hotel room booking, cancellation and management solution with REST API integration.',
        icon: faHotel,
        tech: ['C#', '.NET', 'SQL Server', 'REST API'],
        github: 'https://github.com/akshithasriyanjith',
        featured: true,
    },
    {
        title: 'ML Gesture Application',
        description: 'Real-time hand gesture recognition using computer graphics and machine learning visualization.',
        icon: faHandPointer,
        tech: ['Python', 'OpenCV', 'Flask', 'ML'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'School Management System',
        description: 'Comprehensive system for managing students and teachers with Django backend.',
        icon: faGraduationCap,
        tech: ['Python', 'Django', 'SQLite3', 'REST API'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Travel Nebula Mobile App',
        description: 'Mobile application for traveling with ML-powered recommendations and Firebase backend.',
        icon: faPlane,
        tech: ['Flutter', 'Firebase', 'Python', 'ML'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Braille System',
        description: 'ASP.NET web application for Braille text conversion and accessibility.',
        icon: faBraille,
        tech: ['ASP.NET', 'C#', 'SOAP', 'HTML/CSS'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Japan Lanka Institute System',
        description: 'Complete institute management with data warehouse ETL and Power BI analytics.',
        icon: faUniversity,
        tech: ['C# .NET', 'SQL/PL-SQL', 'ETL', 'Power BI'],
        github: 'https://github.com/akshithasriyanjith',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.projects} id="projects" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>My Work</span>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                </motion.div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.projectImage}>
                                <div className={styles.projectPlaceholder}>
                                    <FontAwesomeIcon icon={project.icon} />
                                </div>
                                <div className={styles.projectOverlay}>
                                    <a
                                        href={project.github}
                                        className={styles.projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

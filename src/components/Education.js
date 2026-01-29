'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faAward } from '@fortawesome/free-solid-svg-icons';
import styles from './Education.module.css';

const education = [
    {
        degree: 'Bachelor of Science in Computer Science',
        school: 'NSBM Green University - Sri Lanka',
        year: '2021 - 2025',
        gpa: '3.62',
        gpaClass: 'Second Class Upper Division',
        courses: 'Computer Architecture, Cryptography, Advanced Database Management, AI, Computer Graphics, Mobile Application Development, Computer Networks, System Analysis and Design',
        icon: faGraduationCap,
    },
    {
        degree: 'Diploma in Software Engineering',
        school: 'University of Sabaragamuwa - Sri Lanka',
        year: '2019 - 2021',
        gpa: '3.16',
        gpaClass: null,
        courses: 'Software Engineering, Database Management, System Analysis and Design, Programming Languages (C and C#)',
        icon: faAward,
    },
    {
        degree: 'G.C.E A/L Physical Science',
        school: 'R/ Balangoda Ananda Maithreya Central College',
        year: '2019',
        gpa: null,
        gpaClass: 'Passed',
        courses: null,
        icon: faSchool,
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.education} id="education" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Background</span>
                    <h2 className={styles.sectionTitle}>Education</h2>
                </motion.div>

                <div className={styles.educationGrid}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className={styles.educationCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.eduIcon}>
                                <FontAwesomeIcon icon={edu.icon} />
                            </div>

                            <div className={styles.eduContent}>
                                <span className={styles.eduYear}>{edu.year}</span>
                                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                                <h4 className={styles.eduSchool}>{edu.school}</h4>

                                <div className={styles.eduGpa}>
                                    {edu.gpa && (
                                        <span className={styles.gpaBadge}>GPA: {edu.gpa}</span>
                                    )}
                                    {edu.gpaClass && (
                                        <span className={`${styles.gpaClass} ${!edu.gpa ? styles.success : ''}`}>
                                            {edu.gpaClass}
                                        </span>
                                    )}
                                </div>

                                {edu.courses && (
                                    <p className={styles.eduCourses}>
                                        <strong>Relevant Coursework:</strong> {edu.courses}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

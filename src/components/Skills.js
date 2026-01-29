'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faGlobe,
    faDatabase,
    faCloud,
    faMobileAlt,
    faPlug
} from '@fortawesome/free-solid-svg-icons';
import {
    faJava,
    faPython,
    faJs,
    faReact,
    faAws,
    faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: faCode,
        skills: [
            { name: 'C', icon: faCode },
            { name: 'Java', icon: faJava },
            { name: 'Python', icon: faPython },
            { name: 'C# .NET', icon: faMicrosoft },
            { name: 'JavaScript', icon: faJs },
            { name: 'Dart', icon: faMobileAlt },
        ],
    },
    {
        title: 'Web Development',
        icon: faGlobe,
        skills: [
            { name: 'Next.js', icon: faReact },
            { name: 'React.js', icon: faReact },
            { name: 'Django', icon: faPython },
            { name: 'Spring Boot', icon: faJava },
            { name: 'ASP.NET MVC', icon: faMicrosoft },
        ],
    },
    {
        title: 'Databases & APIs',
        icon: faDatabase,
        skills: [
            { name: 'SQL Server', icon: faDatabase },
            { name: 'MySQL', icon: faDatabase },
            { name: 'PostgreSQL', icon: faDatabase },
            { name: 'MongoDB', icon: faDatabase },
            { name: 'REST API', icon: faPlug },
            { name: 'SOAP API', icon: faPlug },
        ],
    },
    {
        title: 'Cloud & Mobile',
        icon: faCloud,
        skills: [
            { name: 'AWS', icon: faAws },
            { name: 'Azure', icon: faMicrosoft },
            { name: 'Firebase', icon: faCloud },
            { name: 'Flutter', icon: faMobileAlt },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.skills} id="skills" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Expertise</span>
                    <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
                </motion.div>

                <div className={styles.skillsContent}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className={styles.skillCategory}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                        >
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>
                                    <FontAwesomeIcon icon={category.icon} />
                                </div>
                                <h3>{category.title}</h3>
                            </div>

                            <div className={styles.skillTags}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className={styles.skillTag}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <FontAwesomeIcon icon={skill.icon} />
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

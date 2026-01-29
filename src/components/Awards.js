'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';
import styles from './Awards.module.css';

const awards = [
    {
        type: 'research',
        icon: faBookOpen,
        title: 'Research Publication',
        description: 'Published research paper in the International Conference on Advanced Computing Technologies (ICACT 2025) under the track Frontiers in Data Science and AI Innovation, demonstrating applied research in AI and Data Science.',
    },
    {
        type: 'award',
        icon: faTrophy,
        title: 'Most Impact STEM Volunteer Award',
        description: 'STEMUP Education Foundation, 2025',
    },
    {
        type: 'leadership',
        icon: faUsers,
        title: 'Leadership Roles',
        items: [
            'CodeClub (Codedojo) Community Manager - STEMUP, 2025',
            'Development Team Lead - IEEE NSBM Computer Society, 2024',
            'AWS University Outreach Program Technical Lead - NSBM, 2023',
        ],
    },
];

export default function Awards() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className={styles.awards} id="awards" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionTag}>Achievements</span>
                    <h2 className={styles.sectionTitle}>Awards & Research</h2>
                </motion.div>

                <div className={styles.awardsGrid}>
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.awardCard} ${styles[award.type]}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className={styles.awardIcon}>
                                <FontAwesomeIcon icon={award.icon} />
                            </div>

                            <div className={styles.awardContent}>
                                <h3>{award.title}</h3>
                                {award.description && <p>{award.description}</p>}
                                {award.items && (
                                    <ul>
                                        {award.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

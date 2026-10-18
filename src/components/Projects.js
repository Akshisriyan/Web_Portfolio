'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects, projectCategories, profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import styles from './Projects.module.css';

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

    return (
        <section className="section section-alt" id="projects">
            <div className="container">
                <div className={styles.top}>
                    <SectionHeading
                        eyebrow="Selected work"
                        title="Featured projects"
                        subtitle="A mix of web, mobile and data projects from university and personal work."
                    />

                    <div className={styles.filters} role="group" aria-label="Filter projects by category">
                        {projectCategories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filter} ${filter === cat ? styles.filterActive : ''}`}
                                onClick={() => setFilter(cat)}
                                aria-pressed={filter === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.ul layout className={styles.grid}>
                    <AnimatePresence mode="popLayout" initial={false}>
                        {visible.map((project) => (
                            <motion.li
                                layout
                                key={project.title}
                                className={`card card-hover ${styles.card}`}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.cardTop}>
                                    <span className="icon-box">
                                        <FontAwesomeIcon icon={project.icon} />
                                    </span>
                                    <span className={styles.category}>{project.category}</span>
                                </div>

                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.desc}>{project.description}</p>

                                <div className={styles.tech}>
                                    {project.tech.map((t) => (
                                        <span key={t} className="chip">{t}</span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    className={styles.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} on GitHub`}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    View on GitHub
                                </a>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.ul>

                <div className={styles.more}>
                    <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                        See more on GitHub
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </div>
        </section>
    );
}

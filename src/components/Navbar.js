'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSun, faMoon, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '@/data/portfolio';
import styles from './Navbar.module.css';

// The current theme lives on <html data-theme> (set before paint in layout.js),
// so CSS picks which icon shows and no React state is needed
function ThemeToggle() {
    const toggle = () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch { }
    };

    return (
        <button className={styles.iconBtn} onClick={toggle} aria-label="Toggle dark mode">
            <FontAwesomeIcon icon={faMoon} className={styles.moon} />
            <FontAwesomeIcon icon={faSun} className={styles.sun} />
        </button>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the link of whichever section sits in the middle band of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        ['hero', ...navLinks.map((l) => l.id)].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
        const onResize = () => window.innerWidth > 960 && setIsOpen(false);
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isScrolled || isOpen ? styles.scrolled : ''}`}>
            <nav className={styles.nav} aria-label="Main">
                <a href="#hero" className={styles.logo} onClick={() => setIsOpen(false)}>
                    <span className={styles.logoMark}>AS</span>
                    <span className={styles.logoName}>Akshitha</span>
                </a>

                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className={`${styles.link} ${active === link.id ? styles.active : ''}`}
                                aria-current={active === link.id ? 'true' : undefined}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
                        Let&apos;s talk
                    </a>
                    <button
                        className={`${styles.iconBtn} ${styles.menuBtn}`}
                        onClick={() => setIsOpen((o) => !o)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className={styles.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            id="mobile-menu"
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={`#${link.id}`}
                                            className={active === link.id ? styles.active : ''}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                                Let&apos;s talk
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

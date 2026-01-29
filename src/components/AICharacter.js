'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AICharacter.module.css';

export default function AICharacter() {
    const characterRef = useRef(null);
    const [state, setState] = useState({
        scrolling: false,
        position: 'middle',
        excited: false,
    });
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
            const scrollSpeed = Math.abs(currentScrollY - lastScrollY.current);

            // Determine position based on scroll
            const scrollPercent = currentScrollY / (document.body.scrollHeight - window.innerHeight);
            let position = 'middle';
            if (scrollPercent < 0.2) position = 'top';
            else if (scrollPercent > 0.8) position = 'bottom';

            // Update state
            setState({
                scrolling: true,
                position,
                excited: scrollSpeed > 50,
            });

            lastScrollY.current = currentScrollY;

            // Reset scrolling state after stopping
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setState(prev => ({ ...prev, scrolling: false, excited: false }));
            }, 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const characterClasses = [
        styles.aiCharacter,
        state.scrolling ? styles.scrolling : '',
        state.position === 'top' ? styles.top : '',
        state.position === 'bottom' ? styles.bottom : '',
        state.excited ? styles.excited : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={characterClasses} ref={characterRef}>
            <div className={styles.aiBody}>
                <div className={styles.aiHead}>
                    <div className={`${styles.aiEye} ${styles.left}`}>
                        <div className={styles.eyePupil}></div>
                    </div>
                    <div className={`${styles.aiEye} ${styles.right}`}>
                        <div className={styles.eyePupil}></div>
                    </div>
                    <div className={styles.aiMouth}></div>
                </div>
                <div className={styles.aiAntenna}>
                    <div className={styles.antennaBall}></div>
                </div>
                <div className={styles.aiParticles}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.aiGlow}></div>
            <div className={styles.aiShadow}></div>
        </div>
    );
}

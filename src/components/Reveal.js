'use client';

import { motion } from 'framer-motion';

// Fades content up into view the first time it scrolls on screen
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className, ...rest }) {
    const Tag = motion[as];

    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </Tag>
    );
}

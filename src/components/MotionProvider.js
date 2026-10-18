'use client';

import { MotionConfig } from 'framer-motion';

// Honour the visitor's "reduce motion" OS setting across every animation
export default function MotionProvider({ children }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

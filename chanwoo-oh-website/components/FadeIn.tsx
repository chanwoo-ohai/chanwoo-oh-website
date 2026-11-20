'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Subtle fade-in on scroll. Respects prefers-reduced-motion.
 * A short fallback timer guarantees content becomes visible even if
 * an intersection event is missed (e.g. very fast scrolling).
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const reduce = useReducedMotion();
  const [force, setForce] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setForce(true), 2500);
    return () => clearTimeout(id);
  }, []);
  const Comp = motion[as];
  if (reduce) return <Comp className={className}>{children}</Comp>;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={force ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
}

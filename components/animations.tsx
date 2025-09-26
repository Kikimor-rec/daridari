'use client';

import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' as const }
} as const;

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
} as const;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" as const }
} as const;

// Animated wrapper component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'scaleIn';
  id?: string;
}

const animationPresets = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  scaleIn
} as const;

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = 'fadeInUp',
  id
}: AnimatedSectionProps) {
  const preset = animationPresets[animation] ?? fadeInUp;

  return (
    <motion.div
      id={id}
      className={className}
      initial={preset.initial}
      whileInView={preset.animate}
      transition={{
        ...preset.transition,
        delay
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}

// Animated card component
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Animated button component
interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  const Component = props.href ? motion.a : motion.button;
  
  return (
    <Component
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </Component>
  );
}
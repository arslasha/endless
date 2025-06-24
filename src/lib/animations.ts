import { Variants } from 'framer-motion';

export const pageTransitionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};
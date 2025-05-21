// Animation variants for Framer Motion
import { Variants } from 'framer-motion';

// Fade in from bottom with a slight scale
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for a nicer feel
    } 
  }
};

// Staggered children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Hover effects for cards
export const cardHover: Variants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

// Stats count animation
export const countAnimation: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 20
    }
  }
};

// Progress bar animation
export const progressAnimation: Variants = {
  initial: { width: 0 },
  animate: (custom: number) => ({
    width: `${custom}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
};

// Pulse animation for highlighting items
export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 0.6,
      times: [0, 0.5, 1],
      repeat: 0
    }
  }
};

// For list items
export const listItemAnimation: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

// For page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren"
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

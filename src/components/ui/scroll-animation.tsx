import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants, Easing } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom';
  delay?: number;
}

const easeCustom: Easing = [0.4, 0, 0.2, 1];

const variants = {
  'fade': {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  },
  'slide-up': {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeCustom
      }
    }
  },
  'slide-left': {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeCustom
      }
    }
  },
  'slide-right': {
    hidden: {
      opacity: 0,
      x: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeCustom
      }
    }
  },
  'zoom': {
    hidden: {
      opacity: 0,
      scale: 0.97
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeCustom
      }
    }
  }
};

const ScrollAnimation = ({ 
  children, 
  className = "", 
  variant = 'slide-up',
  delay = 0 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.1, // Reduced threshold for mobile
    margin: "50px" // Added margin to trigger earlier
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      custom={delay}
      className={className}
      style={{
        willChange: 'transform, opacity', // Optimize performance
        backfaceVisibility: 'hidden', // Prevent flickering
        WebkitFontSmoothing: 'antialiased', // Smoother text
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 
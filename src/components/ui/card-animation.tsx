import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants, Easing } from 'framer-motion';

interface CardAnimationProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const easeCustom: Easing = [0.4, 0, 0.2, 1];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.97,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeCustom,
      delay: index * 0.1, // Reduced delay for mobile
    },
  }),
};

const CardAnimation = ({ children, index, className = "" }: CardAnimationProps) => {
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
      variants={cardVariants}
      custom={index}
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

export default CardAnimation; 
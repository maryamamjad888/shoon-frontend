'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0,
    },
  },
};

const itemVariants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
  exit: (custom: number) => ({
    x: '100%',
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: custom * 0.3,
    },
  }),
};

export default function SmoothSlider({
  images,
  delay = 4000,
}: {
  images: string[];
  delay?: number;
}) {
  const [groupSize, setGroupSize] = useState(3); // default to 3
  const [groupIndex, setGroupIndex] = useState(0);
  const [key, setKey] = useState(Date.now());
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateGroupSize = () => {
    if (window.innerWidth < 640) {
      setGroupSize(1); // sm and below
    } else {
      setGroupSize(3); // md and up
    }
  };

  useEffect(() => {
    updateGroupSize(); // Set on mount
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
  }, []);

  const getCurrentGroup = () => {
    const start = groupIndex;
    const end = start + groupSize;

    if (end <= images.length) {
      return images.slice(start, end);
    } else {
      return images.slice(0, groupSize); // fallback to beginning
    }
  };

  useEffect(() => {
    if (isExiting) return;

    timeoutRef.current = setTimeout(() => {
      setIsExiting(true);
    }, delay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [groupIndex, delay, images.length, groupSize, isExiting]);

  const onExitComplete = () => {
    let nextIndex = groupIndex + 1;

    if (nextIndex + groupSize > images.length) {
      nextIndex = 0;
    }

    setGroupIndex(nextIndex);
    setKey(Date.now());
    setIsExiting(false);
  };

  const currentGroup = getCurrentGroup();

  return (
    <div className="w-full h-[150px] relative overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="sync" onExitComplete={onExitComplete}>
        {!isExiting && (
          <motion.div
            key={key}
            className="absolute flex gap-4"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {currentGroup.map((src, i) => (
              <motion.img
                key={src + i}
                src={src}
                className="w-[90px] h-[90px] object-contain"
                variants={itemVariants}
                custom={currentGroup.length - 1 - i}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

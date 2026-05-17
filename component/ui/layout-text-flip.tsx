"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  mainClassName = "relative w-fit overflow-hidden rounded-md border border-white/20 bg-white px-4 pt-1 pb-4 font-sans font-bold tracking-tight text-black dark:bg-neutral-900 dark:text-white",
  textClassName = "text-2xl md:text-4xl",
}: {
  text: string;
  words: string[];
  duration?: number;
  mainClassName?: string;
  textClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <>
      {text && (
        <motion.span
          layoutId="subtext"
          className={cn("font-bold tracking-tight", textClassName)}
        >
          {text}
        </motion.span>
      )}

      <motion.span layout className={cn(mainClassName, textClassName)}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] animate-pulse text-transparent bg-clip-text", textClassName)}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>

    </>
  );
};

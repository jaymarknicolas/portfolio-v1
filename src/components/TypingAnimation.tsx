import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const deleteTimeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(deleteTimeout);
    }

    if (displayText === currentText) {
      setIsPaused(true);
      return;
    }

    const typeTimeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(typeTimeout);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="inline"
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <span className="typing-cursor" />
    </span>
  );
}

// Simpler animated text reveal
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {text}
    </motion.span>
  );
}

// Staggered word animation
interface StaggeredTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
}

export function StaggeredText({
  text,
  className = "",
  wordClassName = "",
  staggerDelay = 0.1,
}: StaggeredTextProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * staggerDelay }}
          className={`inline-block ${wordClassName}`}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

interface RecommendationSliderProps {
  testimonials: Testimonial[];
}

export function RecommendationSlider({
  testimonials,
}: RecommendationSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 space-y-4"
        >
          <p className="text-gray-300 italic">
            "{testimonials[currentIndex].content}"
          </p>
          <div>
            <p className="font-semibold text-white">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-gray-400">
              {testimonials[currentIndex].role} at{" "}
              {testimonials[currentIndex].company}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        variant="outline"
        size="icon"
        className="absolute transition-all group hover:bg-[#FF4D00] top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 text-black group-hover:text-white" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute transition-all group hover:bg-[#FF4D00] top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 text-black group-hover:text-white" />
      </Button>
    </div>
  );
}

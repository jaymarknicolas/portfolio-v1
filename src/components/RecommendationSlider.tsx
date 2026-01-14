import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
          className="glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden"
        >
          {/* Quote icon decoration */}
          <div className="absolute top-4 right-4 opacity-10">
            <Quote className="h-20 w-20 text-[#FF4D00]" />
          </div>

          {/* Content */}
          <div className="relative">
            <p className="text-muted-foreground text-lg leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
          </div>

          {/* Author info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#FF6B35] flex items-center justify-center text-white font-bold text-lg">
              {testimonials[currentIndex].author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role} at{" "}
                <span className="text-[#FF4D00]">
                  {testimonials[currentIndex].company}
                </span>
              </p>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#FF4D00]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute glass-card transition-all duration-300 group hover:bg-[#FF4D00] hover:border-[#FF4D00] top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 text-foreground group-hover:text-white" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute glass-card transition-all duration-300 group hover:bg-[#FF4D00] hover:border-[#FF4D00] top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 text-foreground group-hover:text-white" />
      </Button>
    </div>
  );
}

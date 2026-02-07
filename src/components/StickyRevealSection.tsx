import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface StickyRevealSectionProps {
  header?: ReactNode;
  itemCount: number;
  heightPerItem?: number;
  children: (progress: MotionValue<number>) => ReactNode;
  className?: string;
  id?: string;
}

/**
 * A section that pins to the screen while its children
 * reveal one-by-one driven by page scroll progress.
 *
 * The outer container is tall (itemCount+1 × heightPerItem vh).
 * A sticky inner panel stays pinned at the top of the viewport.
 * As the user scrolls, `scrollYProgress` drives reveal animations.
 *
 * heightPerItem must be large enough so container > 100vh,
 * otherwise there is no scroll travel and nothing pins.
 * Rule of thumb: each item needs ~50-60 vh of scroll travel.
 */
export function StickyRevealSection({
  header,
  itemCount,
  heightPerItem = 60,
  children,
  className,
  id,
}: StickyRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Header fades in quickly at the start of the section
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.06], [12, 0]);

  return (
    <div
      ref={containerRef}
      id={id}
      style={{ height: `${(itemCount + 1) * heightPerItem}vh` }}
      className="relative"
    >
      <div
        className={`sticky top-0 min-h-screen flex flex-col pt-20 pb-8 ${className || ""}`}
      >
        {header && (
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="flex-shrink-0 mb-4"
          >
            {header}
          </motion.div>
        )}
        <div className="flex-1">{children(scrollYProgress)}</div>
      </div>
    </div>
  );
}

interface RevealItemProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

/**
 * A child item inside StickyRevealSection that fades/scales/blurs in
 * at its designated scroll position and stays visible.
 */
export function RevealItem({
  index,
  total,
  progress,
  children,
  className,
}: RevealItemProps) {
  const revealAt = index / total;
  const revealEnd = revealAt + 0.8 / total;

  const opacity = useTransform(progress, [revealAt, revealEnd], [0, 1]);
  const y = useTransform(progress, [revealAt, revealEnd], [30, 0]);
  const scale = useTransform(progress, [revealAt, revealEnd], [0.96, 1]);
  const blurVal = useTransform(progress, [revealAt, revealEnd], [4, 0]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

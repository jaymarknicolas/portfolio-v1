import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { getScrollTarget } from "./SectionLink";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Reset scroll flag when pathname changes
    hasScrolledRef.current = false;
  }, [pathname]);

  useEffect(() => {
    // Prevent double-scrolling
    if (hasScrolledRef.current) return;

    // Check if we're navigating back to home and have a scroll target
    if (navigationType === "POP" && pathname === "/") {
      const scrollTarget = getScrollTarget();
      if (scrollTarget) {
        hasScrolledRef.current = true;

        // Function to scroll to the target element
        const scrollToSection = () => {
          const element = document.getElementById(scrollTarget);
          if (element) {
            // Get the element's absolute position on the page
            const rect = element.getBoundingClientRect();
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const headerOffset = 100;
            const targetPosition = rect.top + scrollTop - headerOffset;

            window.scrollTo({
              top: targetPosition,
              behavior: "instant"
            });
            return true;
          }
          return false;
        };

        // Use requestAnimationFrame to wait for render, then try scrolling
        const attemptScroll = (attemptsLeft: number) => {
          requestAnimationFrame(() => {
            if (!scrollToSection() && attemptsLeft > 0) {
              setTimeout(() => attemptScroll(attemptsLeft - 1), 50);
            }
          });
        };

        // Start scroll attempts after a brief delay to let React render
        setTimeout(() => attemptScroll(30), 10);
        return;
      }
    }

    // For new navigations (PUSH), scroll to top
    if (navigationType !== "POP") {
      hasScrolledRef.current = true;
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}

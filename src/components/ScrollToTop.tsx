import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { getScrollTarget } from "./SectionLink";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Check if we're navigating back and have a scroll target
    if (navigationType === "POP" && pathname === "/") {
      const scrollTarget = getScrollTarget();
      if (scrollTarget) {
        // Wait for the page to render, then scroll to the section
        const scrollToSection = () => {
          const element = document.getElementById(scrollTarget);
          if (element) {
            // Scroll to element with offset for fixed header
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "instant"
            });
            return true;
          }
          return false;
        };

        // Try immediately, then retry a few times as content loads
        if (!scrollToSection()) {
          let attempts = 0;
          const interval = setInterval(() => {
            attempts++;
            if (scrollToSection() || attempts >= 20) {
              clearInterval(interval);
            }
          }, 100);
        }
        return;
      }
    }

    // For new navigations (PUSH), scroll to top
    if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname, navigationType]);

  return null;
}

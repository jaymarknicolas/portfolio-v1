import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SectionLinkProps {
  to: string;
  sectionId: string;
  children: ReactNode;
  className?: string;
}

const SCROLL_TARGET_KEY = "portfolio_scroll_target";

// Save the section to scroll back to
export const saveScrollTarget = (sectionId: string) => {
  sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId);
};

// Get and clear the scroll target
export const getScrollTarget = (): string | null => {
  const target = sessionStorage.getItem(SCROLL_TARGET_KEY);
  sessionStorage.removeItem(SCROLL_TARGET_KEY);
  return target;
};

export function SectionLink({ to, sectionId, children, className }: SectionLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Save which section we're coming from
    saveScrollTarget(sectionId);
    // Navigate to the new page
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

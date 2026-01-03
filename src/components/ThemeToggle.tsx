import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1 rounded hover:bg-muted transition-colors flex items-center justify-center size-7"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <BsSun className="w-5 h-5 text-white" />
      ) : (
        <BsMoon className="w-5 h-5 text-gray-900" />
      )}
    </button>
  );
}

"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <BsMoonStarsFill size={20} />
        ) : (
          <BsSunFill size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

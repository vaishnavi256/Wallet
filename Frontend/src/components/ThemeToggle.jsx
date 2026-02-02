import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
    >
      {/* Sliding Circle */}
      <div
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md
          flex items-center justify-center text-sm
          transition-all duration-300
          ${theme === "dark" ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </button>
  );
}

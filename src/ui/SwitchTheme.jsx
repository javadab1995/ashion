
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function SwitchTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    setIsDark((current) => !current);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={
        isDark ? "تغییر به تم روشن" : "تغییر به تم تاریک"
      }
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-19 shrink-0 items-center rounded-full border border-border bg-surface-alt p-1 transition-colors duration-300 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {/* پس‌زمینه متحرک سوییچ */}
      <span
        className={`absolute top-1 h-8 w-8 rounded-full bg-primary shadow-btn transition-all duration-300 ${
          isDark ? "right-1" : "right-9.5"
        }`}
      />

      {/* آیکون ماه */}
      <span
        className={`z-10 flex h-8 w-8 items-center justify-center transition-colors duration-300 ${
          isDark ? "text-text-inverse" : "text-text-muted"
        }`}
      >
        <HiOutlineMoon size={19} />
      </span>

      {/* آیکون خورشید */}
      <span
        className={`z-10 flex h-8 w-8 items-center justify-center transition-colors duration-300 ${
          !isDark ? "text-text-inverse" : "text-text-muted"
        }`}
      >
        <HiOutlineSun size={19} />
      </span>
    </button>
  );
}

export default SwitchTheme;

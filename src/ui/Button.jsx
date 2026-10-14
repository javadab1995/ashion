
function Button({
  children,
  type = "primary",
  goToSlide,
  currentIndex,
  onClick,
  disabled = false,
  className = "",
  htmlType = "button",
}) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "border  border-primary bg-primary px-6 py-3 text-text-inverse shadow-btn hover:bg-primary-hover",

    secondary:
      "border border-primary-border bg-primary-bg px-6 py-3 text-primary hover:bg-primary-border",

    submit:
      "border w-full  border-primary bg-primary px-6 py-3 text-text-inverse shadow-btn hover:bg-primary-hover",

    formbtn:
      "rounded-b-2xl bg-surface-alt px-7 py-3 text-base font-semibold text-text-h hover:bg-primary-bg hover:text-primary",

    back: "px-4 py-3 text-sm font-semibold text-primary hover:bg-primary-bg",

    small:
      "w-full rounded-lg bg-primary px-4 py-2.5 text-sm text-text-inverse hover:bg-primary-hover",

    dot: "h-3 w-3 rounded-full border-0 p-0",
  };

  if (type === "dot") {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            type="button"
            aria-label={`رفتن به اسلاید ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
            onClick={() => goToSlide?.(index)}
            className={`${baseClass} ${variants.dot} ${
              currentIndex === index
                ? "bg-primary"
                : "bg-border hover:bg-primary-border"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <button
      type={type === "submit" ? "submit" : htmlType}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[type] ?? variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

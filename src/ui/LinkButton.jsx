
import { Link, useNavigate } from "react-router-dom";

function LinkButton({
  children,
  to,
  type = "default",
  className = "",
  onClick,
}) {
  const navigate = useNavigate();

  const baseClass =
    "inline-flex items-center justify-center gap-2 mt-2 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  const variants = {
    default:
      "rounded-lg px-3 py-2 text-text-h hover:bg-primary-bg hover:text-primary",

    primary:
      "rounded-lg border-b border-primary px-1 py-2 text-primary hover:border-primary-hover hover:text-primary-hover",

    submit:
      "rounded-xl border border-primary bg-primary px-5 py-2.5 text-text-inverse hover:bg-primary-hover",

    back:
      "rounded-lg px-3 py-2 text-text-muted hover:bg-surface-alt hover:text-text-h",
  };

  const classes = `${baseClass} ${variants[type] ?? variants.default} ${className}`;

  if (to === "-1") {
    return (
      <button
        type="button"
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            navigate(-1);
          }
        }}
        className={classes}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={to ?? "/"} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;

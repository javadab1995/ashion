
import { useId } from "react";

function Input({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  autoComplete,
  required = false,
  disabled = false,
  error,
  icon: Icon,
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  inputClassName = "",
  onBlur,
  onFocus,
  dir = "rtl",
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-2 block text-sm font-medium text-text-h ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            aria-hidden="true"
            size={20}
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${
              dir === "rtl" ? "right-4" : "left-4"
            } text-text-muted`}
          />
        )}

        <input
          {...props}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          disabled={disabled}
          dir={dir}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`
            input h-12 w-full rounded-xl border bg-surface px-4
            text-text-h placeholder:text-text-muted
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary/20
            disabled:cursor-not-allowed disabled:opacity-50
            ${Icon ? (dir === "rtl" ? "pr-11" : "pl-11") : ""}
            ${
              error
                ? "border-primary focus:border-primary"
                : "border-primary-border focus:border-primary"
            }
            ${inputClassName}
            ${className}
          `}
        />
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-1.5 text-sm text-primary"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;


import Countdown from "react-countdown";
import { Clock3 } from "lucide-react";
import { toPersianDigits } from "../helpers/number";

function CountdownComponnent({
  date = Date.now() + 27 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000,
}) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div
          role="status"
          className="rounded-xl border border-primary-border bg-primary-bg px-4 py-4 text-sm font-bold text-primary"
        >
          مهلت این پیشنهاد به پایان رسیده است.
        </div>
      );
    }

    const units = [
      { label: "روز", value: days },
      { label: "ساعت", value: hours },
      { label: "دقیقه", value: minutes },
      { label: "ثانیه", value: seconds },
    ];

    return (
      <div className="w-full">
        <div className="mb-3 flex items-center justify-center gap-2 text-text-muted">
          <Clock3 size={15} />
          <span className="text-xs">قبل از پایان فرصت خرید</span>
        </div>

        <div
          dir="rtl"
          className="grid grid-cols-4 gap-2 sm:gap-3"
          aria-label={`زمان باقی‌مانده: ${days} روز و ${hours} ساعت و ${minutes} دقیقه و ${seconds} ثانیه`}
        >
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className={`relative flex min-w-0 flex-col items-center justify-center rounded-xl border px-1 py-3 sm:rounded-2xl sm:py-4 ${
                index === 0
                  ? "border-primary bg-primary text-text-inverse shadow-btn"
                  : "border-border bg-surface text-text-h"
              }`}
            >
              <span className="text-xl font-black tabular-nums sm:text-2xl">
                {toPersianDigits(String(unit.value).padStart(2, "0"))}
              </span>

              <span
                className={`mt-1 text-[10px] font-medium sm:text-xs ${
                  index === 0
                    ? "text-text-inverse/80"
                    : "text-text-muted"
                }`}
              >
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Countdown
      date={date}
      renderer={renderer}
      zeroPadTime={2}
    />
  );
}

export default CountdownComponnent;

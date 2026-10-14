import { toPersianDigits } from "./number";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);

export function toPersianDate(date) {
  if (!date) return "";

  return toPersianDigits(
    dayjs(date).calendar("jalali").locale("fa").format("YYYY/MM/DD"),
  );
}

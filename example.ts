import dayjs from "./mod.ts";
const day = dayjs().format("YYYY-MM-DD HH:mm:ss");
console.log(day);

console.log(dayjs().startOf("date").toDate());
console.log(dayjs().startOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs().endOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs("20211027").endOf("date").format("YYYY-MM-DD HH:mm:ss"));

// use plugin
import { weekOfYear } from "./plugins/weekOfYear.ts";
dayjs.extend(weekOfYear);

/**
 * 根据日期，获取这年的周数
 * @param day 格式：2021-11-24
 */
export function getYearAndWeek(day: string | Date) {
  const date = dayjs(day);
  return date.year() + "-" + date.week();
}

console.log(getYearAndWeek("2021-11-24"));
console.log(getYearAndWeek(new Date()));

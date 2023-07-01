import dayjs from "./mod.ts";
// use plugin
import utc from "./plugin/utc.ts";
import weekOfYear from "./plugin/weekOfYear.ts";
import relativeTime from "./plugin/relativeTime.ts";

dayjs.extend(weekOfYear);
{
  console.group("weekOfYear");
  const day = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log(day);

  console.log(dayjs().startOf("date").toDate());
  console.log(dayjs().startOf("date").format("YYYY-MM-DD HH:mm:ss"));
  console.log(dayjs().endOf("date").format("YYYY-MM-DD HH:mm:ss"));
  console.log(dayjs("20211027").endOf("date").format("YYYY-MM-DD HH:mm:ss"));

  /**
   * 根据日期，获取这年的周数
   * @param day 格式：2021-11-24
   */
  // deno-lint-ignore no-inner-declarations
  function getYearAndWeek(day: string | Date) {
    const date = dayjs(day);
    return date.year() + "-" + date.week();
  }
  console.log(getYearAndWeek("2021-11-24"));
  console.log(getYearAndWeek(new Date()));

  console.groupEnd();
}

dayjs.extend(relativeTime);
{
  console.group("relativeTime");
  const results = {
    from: dayjs().from(dayjs("1990-01-01")), // in 33 years
    fromTrue: dayjs().from(dayjs("1990-01-01"), true), // 33 years
    fromNow: dayjs().fromNow(),

    to: dayjs().to(dayjs("1990-01-01")), // "33 years ago"
    toNow: dayjs().toNow(),
  };

  console.table(results);
  console.groupEnd();
}

dayjs.extend(utc);
{
  console.group("utc");
  const results = {
    utc: dayjs().utc().get("hour"),
    local: dayjs().get("hour"),
  };
  console.table(results);
  console.groupEnd();
}

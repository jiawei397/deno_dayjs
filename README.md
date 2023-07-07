# deno_dayjs

Provides `dayjs 1.11.5` for Deno.

Day.js is a minimalist JavaScript library that parses, validates, manipulates,
and displays dates and times for modern browsers with a largely
Moment.js-compatible API. If you use Moment.js, you already know how to use
Day.js.

More info or API [here](https://deno.land/x/dayjs).

## Example

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.4.0/mod.ts";

const day = dayjs().format("YYYY-MM-DD HH:mm:ss");
console.log(day);

console.log(dayjs().startOf("date").toDate());
console.log(dayjs().startOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs().endOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs("20211027").endOf("date").format("YYYY-MM-DD HH:mm:ss"));
```

# Plugins

> You can also get the URL from cdn yourself like:
> `https://esm.sh/dayjs@1.11.5/plugin/<pluginName>`.

## Week of year

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.4.0/mod.ts";
import weekOfYear from "https://deno.land/x/deno_dayjs@v0.4.0/plugin/weekOfYear.ts";
dayjs.extend(weekOfYear);

const date = dayjs(day);
console.log(date.year() + "-" + date.week());
```

## Relative Time

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.4.0/mod.ts";
import relativeTime from "https://deno.land/x/deno_dayjs@v0.4.0/plugin/relativeTime.ts";
dayjs.extend(relativeTime);

dayjs().from(dayjs("1990-01-01")); // in 33 years
dayjs().from(dayjs("1990-01-01"), true); // 33 years
dayjs().fromNow();

dayjs().to(dayjs("1990-01-01")); // "33 years ago"
dayjs().toNow();
```

## UTC

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.4.0/mod.ts";
import utc from "https://deno.land/x/deno_dayjs@v0.4.0/plugin/utc.ts";
dayjs.extend(utc);

dayjs.utc().hour(); // 10
dayjs.hour(); // 18
```

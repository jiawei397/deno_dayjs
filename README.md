# deno_dayjs

Provides `dayjs 1.10.7` for Deno.

Day.js is a minimalist JavaScript library that parses, validates, manipulates,
and displays dates and times for modern browsers with a largely
Moment.js-compatible API. If you use Moment.js, you already know how to use
Day.js.

More info or API to see [this way](https://deno.land/x/dayjs).

## example

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.0.2/mod.ts";

const day = dayjs().format("YYYY-MM-DD HH:mm:ss");
console.log(day);

console.log(dayjs().startOf("date").toDate());
console.log(dayjs().startOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs().endOf("date").format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs("20211027").endOf("date").format("YYYY-MM-DD HH:mm:ss"));
```

use plugin, but now just one `weekOfYear` which is my need.

```ts
import dayjs from "https://deno.land/x/deno_dayjs@v0.0.2/mod.ts";
import { weekOfYear } from "https://deno.land/x/deno_dayjs@v0.0.2/plugin/weekOfYear.ts";
dayjs.extend(weekOfYear);

const date = dayjs(day);
console.log(date.year() + "-" + date.week());
```

You can also get the pin URL from cdn yourself like:
`https://cdn.skypack.dev/dayjs@v1.10.7/esm/plugin/weekOfYear/index.js`.

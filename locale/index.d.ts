// deno-lint-ignore-file no-empty-interface
/// <reference path="./types.d.ts" />

declare module "dayjs/esm/locale/*" {
  namespace locale {
    export interface Locale extends ILocale {}
  }
}

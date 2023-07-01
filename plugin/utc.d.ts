import { PluginFunc } from "../index.d.ts";

declare const plugin: PluginFunc;
export default plugin;

declare module "../index.d.ts" {
  export interface Dayjs {
    utc(keepLocalTime?: boolean): Dayjs;
    local(): Dayjs;
    isUTC(): boolean;
    utcOffset(offset: number | string, keepLocalTime?: boolean): Dayjs;
  }
}

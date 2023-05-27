import { PluginFunc } from "../index.d.ts";

declare const plugin: PluginFunc;
export default plugin;

declare module "../index.d.ts" {
  export interface Dayjs {
    fromNow(withoutSufix?: boolean): string;
    from(compared: Dayjs, withoutSuffix?: boolean): string;
    toNow(withoutSuffix?: boolean): string;
    to(compared: Dayjs, withoutSuffix?: boolean): string;
  }
}

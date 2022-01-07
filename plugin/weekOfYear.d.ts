import { PluginFunc } from "../index.d.ts";

declare const plugin: PluginFunc;
export default plugin;

declare module "../index.d.ts" {
  export interface Dayjs {
    week(): number;
    week(value: number): Dayjs;
  }
}

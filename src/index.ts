export { ArgBit } from "./bits";
export { RawArgsBit } from "./bits";

declare global {
  namespace NodeJS {
    export interface Global {
      arg(arg: string | string[], opts: Object): void;
      raw_args(): void;
    }
  }
}

import { Suru } from "@surucode/suru-core";
import { ArgBit, RawArgsBit } from ".";

export default (): void => {
  void Suru.registerBit("arg", ArgBit);
  void Suru.registerBit("raw_args", RawArgsBit);
};

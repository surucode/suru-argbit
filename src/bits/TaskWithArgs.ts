import { ArgumentParser } from "argparse";
import { Task } from "@surucode/suru-core";

export interface TaskWithArgs extends Task {
  argParser: ArgumentParser;

  runWithoutParsing: (...args: string[]) => any;
  run: (...args: [{[name: string]: any}]) => any;
}
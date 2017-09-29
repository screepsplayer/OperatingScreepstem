declare var global: any;
import * as _kernel from "../core/kernel";

export function init() {
  global.help = help;
  global.test = test;
  global.start = _kernel.start;
  global.pause = _kernel.pause;
  global.stop = _kernel.stop;
  global.reset = _kernel.reset;
  global.sleep = _kernel.sleep;
  global.init = _kernel.initialize;
}
/* CLI help module */
function help() {
  // must be displayed when typping help() in game console
  console.log("  AVAILABLE COMMANDS : ");
  console.log("init()               : Initialize the Screepstem");
  console.log("start()              : To start Operating Screepstem");
  console.log("stop()               : To stop the Screepstem");
  console.log("pause()              : To pause OS execution");
  console.log("reset()              : To reset the Screepstem");
  console.log("sleep(x)             : To sleep the OS for 'x' ticks (0 = unlimited)");
  console.log("");
}

/* CLI Commands to manage the system */

/* CLI Commands to manage processes */

/* CLI Commands to manage the display */

/* CLI Commands to manage various utilities */

function test() {
  return "Ok aussi";
}

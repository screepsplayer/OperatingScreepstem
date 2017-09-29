import * as _cli from "./Screepstem/console/cli";
import * as _kernel from "./Screepstem/core/kernel";
import * as _memory from "./Screepstem/core/memory";

// tslint:disable-next-line:only-arrow-functions
export const loop = function() {

    // Initialize memory. First step needed to aquire game status
    _memory.init();

    // Initialize the command line interface. Based on current status
    _cli.init();

    // Run kernel, based on current status
    _kernel.run();
    console.log(__REVISION__);
    // global.SysMemory = SysMemory;

    /*SysMemory.initMonitorMemory();
     for (var name in Game.rooms) {
         let thisRoom: Room = Game.rooms[name];
         SysMemory.refreshRoomMemory(thisRoom);
     }

     consoleDisplay.runMaster();
     SysMemory.runCpuMonitor();

     console.log("Tick : " + Game.time + " - Ending ");
     Memory.cpuMonitor.values.push(Game.cpu.getUsed().toFixed(2));
     */
};

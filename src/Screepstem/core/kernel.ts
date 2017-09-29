import * as CONST from "../../const";

/*
* These are the kernel methods which may be called from cli.
*/
export function initialize() {
    Memory.system.status = CONST.SYS_STATUS.STARTING;
    return "Initialization of the Screepstem, please wait";
}

export function start() {
    Memory.system.status = CONST.SYS_STATUS.RUNNING;
    return "System started";
}

export function stop() {
    Memory.system.status = CONST.SYS_STATUS.STOPPED;
    return "System stopped";
}

export function pause() {
    Memory.system.status = CONST.SYS_STATUS.PAUSED;
    return "System paused";
}
export function reset() {
    Memory.system.status = CONST.SYS_STATUS.RESETTING;
    return "System rebooting";
}

/* sleep may be needed if CPU bucket is empty */
export function sleep(time: number) {
    // store number in Memory.system.sleep
    // decrease each tick
    //
    if (Memory.system.sleep !== 0) {
        return "Sleep already planned";
    } else {
        Memory.system.sleep = time;
    }
}

/*
* This one is the kernel routine, running every tick, checking for status.

*/

export function run() {
    switch (Memory.system.status) {
        case CONST.SYS_STATUS.STARTING:
            console.log("booting");
            console.log("pouer");
        case CONST.SYS_STATUS.RESETTING:

        case CONST.SYS_STATUS.PAUSED:
        // do nothing, let console work
        case CONST.SYS_STATUS.SLEEPING:
        // decrease counter

        case CONST.SYS_STATUS.STOPPED:
        // delete memory, dont do anything anymore
        case CONST.SYS_STATUS.RUNNING:
        // rebuil process table, do stuff
    }

    return "System running";
}

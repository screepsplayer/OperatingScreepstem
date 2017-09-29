import {SYS_STATUS} from "../../const";

export function init() {
    /*
        Init memory must be about :
            - Check of the system status.
            In any case, update system values if needed (uptime, sleep, )
            (kernel will retrieve process memory when it will need it)

    */

    if (!Memory.system === undefined && Memory.system.status !== undefined) {
        if (Memory.system.status === SYS_STATUS.RUNNING) {
            console.log("running");
        }
    } else {
        // so when memory.system does not exist, ecoSys boot, sys stopped
        init_env();
    }
}

// init Memory.system with stopped status
// must be used for first boot, reboot and
function init_env() {
    Memory.system = {
        status: SYS_STATUS.STOPPED,
        step: "Operating Screepstem is not running currently. Type help() for more information.",
        uptime: 0
    };
    return "Memory initialized";

}

// Erase and recreate basics Memory entries.
export function erase() {
    RawMemory.set("{}");
    Memory.creeps = {};
    Memory.flags = {};
    Memory.rooms = {};
    Memory.spawns = {};
    Memory.log = {};
    return "Memory erased";
}

export function reset_env() {
    // reset uptime, destroy process memory, init env with starting status
    return "Memory reset";
}

/*let refreshRoomMemory = function(room) {
  room.memory.builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  room.memory.harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  room.memory.upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  room.memory.repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
};

function resetStatus() {
  Memory.status = 0;
  initMonitorMemory();
  initEventMonitor();

  return 'done';
}

let initMemory = function() {
  console.log('nothdsrsd');
};

let getModulesStatus = function() {
  let modulesStatus = [];
  for (var i = 0; i < Memory.modulesMonitor.length; i++) {
      modulesStatus.push(Memory.modulesMonitor[i]);
  }
  return 'temp';
}

let initMonitorMemory = function() {
  if (Memory.Monitor === undefined) {
      Memory.monitor = {};
  }

  if (Memory.eventMonitor === undefined) {
      Memory.eventMonitor = [];
  }

}

let initEventMonitor = function() {
  if (Memory.eventMonitor === undefined) {
      Memory.eventMonitor = [];
  }
}

let runCpuMonitor = function() {
  if (Memory.cpuMonitor === undefined) {
      Memory.cpuMonitor = {
          values: [],
          moy5: -1,
          moy10: -1,
          moy100: -1,
          lastCpu: -1,
          thisCpu: 0
      };
  }

  //Memory.cpuMonitor.values.push(Game.cpu.getUsed().toFixed(2));
  let temp = [];
  Memory.cpuMonitor.lastCpu = Memory.cpuMonitor.values[Memory.cpuMonitor.values.length - 1];

  if (Memory.cpuMonitor.values.length >= 4) {
      temp = Memory.cpuMonitor.values.slice(-5);
      Memory.cpuMonitor.moy5 = getAvg(temp).toFixed(2);
  }
  if (Memory.cpuMonitor.values.length >= 9) {
      temp = Memory.cpuMonitor.values.slice(-10);
      Memory.cpuMonitor.moy10 = getAvg(temp).toFixed(2);
  }

  if (Memory.cpuMonitor.values.length >= 99) {
      temp = Memory.cpuMonitor.values.slice(-100);
      Memory.cpuMonitor.moy100 = getAvg(temp).toFixed(2);
  }
  Memory.cpuMonitor.values = Memory.cpuMonitor.values.slice(-100);
  Memory.cpuMonitor.thisCpu = Game.cpu.getUsed().toFixed(2);
}

let thisTickMemory = function() {

}

function getAvg(arr) {
  let sum = arr.reduce(function(a, b) {
      return parseFloat(a) + parseFloat(b);
  });
  //console.log('sum' + sum);
  //console.log('len ' + arr.length);
  let avg = sum / arr.length;
  return avg;
}

module.exports.runCpuMonitor = runCpuMonitor;
module.exports.initMonitorMemory = initMonitorMemory;
module.exports.refreshRoomMemory = refreshRoomMemory;
module.exports.resetStatus = resetStatus;*/

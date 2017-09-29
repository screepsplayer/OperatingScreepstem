/*class Column {
  private name: string;
  style: string;

  constructor(name, style) {
      this.name = name;
      //style should include color, size and padding
      this.style = style;
  }

  getName() {
      return this.name;
  }
  // thisElement could be a room, a pid or null
  getValue(thisElement) {
      //fallback
      return 'Undefined getValue function for ' + thisElement.toString();
  }

  getStyle() {
      //fallback
      return this.style;
  }
}


class myBlocTable {
    columns : Array<Column>;
    name : string;
    style: string;

  constructor(name, style, columns) {
      this.name = name;
      this.style = style;
      this.columns = columns;
      //style should include color, size and padding

  }
  getFullBlocTable(categoryFlag : boolean, headerFlag : boolean) {
      let thisTable = '<table cellspacing="10" cellpadding="10"' + this.style + '>';

      if (categoryFlag) {
          thisTable += this.getBlocHeaderRow();
      }
      if (headerFlag) {
          thisTable += this.getColumnsHeaderRow();
      }
      for (var name in Game.rooms) {
          /** @type {Room} thisRoom
          thisTable += this.getDataRow(Game.rooms[name]);
      }
      thisTable += '</table>';
      return thisTable;
  }

  getBlocHeaderRow() {
      return '<tr><th  class="data center" colspan="' + (this.columns.length + 1) + '">' + this.name + '</th></tr>';

  }

  getColumnsHeaderRow() {
      let thisRow = '<tr >';
      for (var i = 0; i < this.columns.length; i++) {
          thisRow += '<th ' + this.columns[i].getStyle() + '>' + this.columns[i].getName() + '</th>';
      }
      thisRow += '</tr>';
      return thisRow;
  }

  getDataRow(thisRoom) {
      let thisRow = '<tr>';
      for (var i = 0; i < this.columns.length; i++) {
          thisRow += '<td ' + this.columns[i].getStyle() + '>' + this.columns[i].getValue(thisRoom) + '</td>';
      }
      thisRow += '</tr>';
      return thisRow;
  }

}

let runMaster = function() {
  let myDataTable = defineDataTable();
  //open main div and main table
  let myOutput = '<div>' + getCSS() + '<table class="main"  background-color="#ABCABC" ><tr>';
  for (var i = 0; i < myDataTable.length; i++) {
      myOutput += '<td>' + myDataTable[i].getFullBlocTable(true, true) + '</td>';
  }

  //middle column
  let myMonitorTable = defineMonitorTable();
  myOutput += '<td rowspan ="2" valign="top"><div height="100px" >' + myMonitorTable.getFullBlocTable(true, false) + '</div></td>';
  //right column
  let myDebugTable = defineDebugTable();
  myOutput += '<td rowspan ="2">' + myDebugTable.getFullBlocTable(true, false) + '</td>';
  //second row
  myOutput += '</tr><tr>';
  myOutput += '<td class="main" valign="bottom" colspan="' + myDataTable.length + '"><div width="100%">' + defineFooterTable() + '</div></td>';
  myOutput += '</tr></table></div>';

  console.log(myOutput);
};

let getCSS = function() {
  let myOutput = '<style  type="text/css">';
  myOutput += 'table.data {border: 1px solid; margin:5px; padding: 5px;} '; // table {border: 1px solid; width:100%}
  myOutput += 'table.main {margin:5px; padding:5px; } '; // table {border: 1px solid; width:100%}
  myOutput += 'td.main {table-layout: fixed; margin:5px; padding:5px;} '; // table {border: 1px solid; width:100%}
  myOutput += 'th.data {border: 1px solid; text-align:center; margin:5px; padding: 5px;} '; // table {border: 1px solid; width:100%}
  //    myOutput += 'tr.data {border: 1px solid; text-align:center; margin:5px; padding: 5px;} '; // table {border: 1px solid; width:100%}
  myOutput += 'td.data {border: 1px solid; text-align:center; margin:5px; padding: 5px;} '; // table {border: 1px solid; width:100%}
  myOutput += '.left {text-align:left;} ';
  myOutput += '.right {text-align:right;} ';
  myOutput += '.center {text-align:center;} ';
  myOutput += 'thead.debug, tbody.debug { display: block; } ';
  myOutput += 'td.debug {table-layout: fixed; margin:5px; padding:5px;} '; // table {border: 1px solid; width:100%}
  myOutput += 'th.debug {border: 1px solid; text-align:center; margin:5px; padding: 5px;} '; // table {border: 1px solid; width:100%}
  myOutput += 'tbody.debug { border: 1px solid; margin:5px; ;  height:200px; position: relative; bottom:0 ; overflow-y: auto; overflow-x: hidden;} '; // height: 300px;
  myOutput += '.center {text-align:center;} ';
  myOutput += '.center {text-align:center;} ';
  myOutput += '</style>';

  return myOutput;
}


let defineMonitorTable = function() {
  let ProcessPiD = new Column('PID', ' class="debug"  width="75px"');
  ProcessPiD.getValue = function(pid) {
      return pid;
  };
  let ProcessParentPID = new Column('Parent PID', ' class="debug"  width="75px"');
  ProcessParentPID.getValue = function(pid) {
      return Memory.processTable[pid].parentPID;
  };
  let ProcessClass = new Column('Class', ' class="debug" width="175px"');
  ProcessClass.getValue = function(pid) {
      return Memory.processTable[pid].fileName;
  };
  let monitorTable = new myBlocTable('monitor', 'class="data"  ', [ProcessPiD, ProcessParentPID, ProcessClass]);
  monitorTable.getFullBlocTable = function() {
      let thisTable = '<table id=""' + this.style + '><thead class="debug">';
      let processTable = Memory.processTable;
      thisTable += monitorTable.getColumnsHeaderRow() + '</thead><tbody class="debug">';
      for (var pid in processTable) {
          //thisTable += '<tr padding-bottom="10px"><td>' + processTable[pid].pid + '</td><td>' + processTable[pid].parentPID + '</td><td>' + processTable[pid]. + '</td></tr>';
          thisTable += monitorTable.getDataRow(pid);
      }
      //  Memory.eventMonitor = tempEvent;
      thisTable += '</tbody></table>';
      return thisTable;
  }


  return monitorTable;


}

let defineDebugTable = function() {
  let monitor = new Column('actions', 'height="100%" width="150px"');
  monitor.getValue = function() {
      for (var i = 0; i < Memory.eventMonitor.length; i++) {
          Memory.eventMonitor[i]
      }
      return Memory.cpuMonitor.moy5;
  }

  let monitorTable = new myBlocTable('Footer', 'class="" margin="1px" width="100%" ', [monitor]);
  return monitorTable;

}

let defineFooterTable = function() {
  let actionRunning = new Column('Current task:', 'class="data" ');
  actionRunning.getValue = function() {
      return Memory.MonitorStatus;
  }

  let cpuMoy5 = new Column('AVG / 5t', 'class="data" width="50px"');
  cpuMoy5.getValue = function() {
      return Memory.cpuMonitor.moy5;
  }

  let cpuMoy10 = new Column('AVG / 10t', 'class="data" width="50px"');
  cpuMoy10.getValue = function() {
      return Memory.cpuMonitor.moy10;
  }

  let cpuMoy100 = new Column('AVG / 100t', 'class="data" width="50px"');
  cpuMoy100.getValue = function() {
      return Memory.cpuMonitor.moy100;
  }

  let cpuLastTick = new Column('Last Tick', 'class="data" width="50px"');
  cpuLastTick.getValue = function() {
      return Memory.cpuMonitor.lastCpu;
  }


  let cpuUsedCol = new Column('This tick:', 'class="data" width="60px"');
  cpuUsedCol.getValue = function() {
      return Game.cpu.getUsed().toFixed(2).toString();
  }

  let footerTable = new myBlocTable('Footer', 'class="" width="100%" margin-bottom="10px"; ', [actionRunning, cpuMoy5, cpuMoy10, cpuMoy100, cpuLastTick, cpuUsedCol]);
  let myOutput = footerTable.getFullBlocTable(false, true);
  return myOutput;

}
// first table displayed on the left
let defineDataTable = function() {
  let roomCol = new Column('Room', 'class="data left" width="65px"');
  roomCol.getValue = function(room) {
      return room.name;
  };

  let ctrlLvlCol = new Column('Lvl', 'class="data center" width="35px"');
  ctrlLvlCol.getValue = function(room) {
      return room.controller.level.toString();
  };

  let availEnergyCol = new Column('Energy', 'class="data right"');
  availEnergyCol.getValue = function(room) {
      return abbreviateNumber(room.energyAvailable, 2); //+ room.storage.store[RESOURCE_ENERGY], 0)
  };

  let maxEnergyCol = new Column('Max E.', 'class="data left"');
  maxEnergyCol.getValue = function(room) {
      return abbreviateNumber(room.energyCapacityAvailable, 0);
  };

  let creepUpgraderCol = new Column('Upg', 'class="data"');
  creepUpgraderCol.getValue = function(room) {
      return room.memory.upgraders.length.toString();
  }

  let creepBuilderCol = new Column('Bui', 'class="data"');
  creepBuilderCol.getValue = function(room) {
      //this.setColor('124,187,25');
      return room.memory.builders.length.toString() ;
  }

  let creepRepairerCol = new Column('Rep', 'class="data"');
  creepRepairerCol.getValue = function(room) {
      return room.memory.repairers.length.toString();
  }

  let creepHarvesterCol = new Column('Har', 'class="data"');
  creepHarvesterCol.getValue = function(room) {
      return room.memory.harvesters.length.toString();
  }

  let actionRunning = new Column('Current task:', 'class="data"');
  actionRunning.getValue = function(room) {
      return Memory.MonitorStatus;
  }

  let cpuUsedCol = new Column('Total CPU:', 'class="data"');
  cpuUsedCol.getValue = function(room) {
      return Game.cpu.getUsed().toString();
  }

  let roomTable = new myBlocTable('Rooms', 'class="data" ', [roomCol, ctrlLvlCol]);
  let structureTable = new myBlocTable('Structures', 'class="data" ', [ctrlLvlCol, ctrlLvlCol, ctrlLvlCol]);
  let energyTable = new myBlocTable('Energy Storage', 'class="data" ', [availEnergyCol, maxEnergyCol]);
  let creepsTable = new myBlocTable('Creeps', 'class="data" ', [creepBuilderCol, creepUpgraderCol, creepRepairerCol, creepHarvesterCol]);

  return [roomTable, structureTable, energyTable, creepsTable];

};


//Colorize the string based on RGB values (r, g, b)
function colorize(string, rgb) {
  string = '<span style="color:rgb(' + rgb + ');">' + string + '</span>';
  return string;
}

//Set the string in bold
function boldify(string) {
  string = '<b>' + string + '</b>';
  return string;
}

//Display large number in a shorter way
function abbreviateNumber(num, fixed) {
  if (num === null) {
      return null;
  } // terminate early
  if (num === 0) {
      return '0';
  } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  let b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}
//vertical table
//let buildDebugTable = function() {};


//let buildMonitoringTable = function() {};



module.exports.runMaster = runMaster;
*/

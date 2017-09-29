import {ProcessInterface} from "./typings";

export abstract class Process implements ProcessInterface {
  public pid: number;
  public parentPid: number;
  public status: number;
  public memory: any;
  public classPath: string;

  constructor(pid: number, parentID: number, thisMemory: any) {
    this.pid = pid;
    this.parentPid = parentID;
    this.memory = thisMemory;
    // this.pid = global.Kernel.getFreePid();
    // this.func = memory;
  }
  /*  get mem() {
        return this.scope.memory
    }
    get cache() {
        return this.scope.cache
    }*/

  // wut ?
  /*  get logger() {
        return this.scope.logger
    }
    get log() {
        return this.scope.logger
    }*/

  /*  get pinfo() {
        return this.scope.pinfo
    }
    get id() {
        return this.pinfo.id
    }*/
  /*set setparentID(val) {
    this.parentPid = val;
  }*/

  get getparentID() {
    return this.parentPid;
  }
  get args() {
    return this.args;
  }

  // priority (0 - 50 --> Zero = max priority)
  /*  get priority() {
        return this.pinfo.priority
    }
    set priority(v) {
        this.pinfo.priority = v
    }*/

  // process title - name
  /*  get title() {
        return this.pinfo.title
    }
    set title(v) {
        this.pinfo.title = v
    }*/
  public abstract run();
/*
  exit(code, msg) {
    this.pinfo.xc = code
    this.pinfo.xm = msg
    this.pinfo.status = 'stopped'
  }*/

  /* send process.signal('sigterm') to end process with exit code 0
   *should i catch here the others status ? (interuptions, CPU kill...)
   */
  /*signal(sig) {
    if (sig == 'sigterm')
      this.exit(0, 'sigterm')
    else if (sig == 'sigkill')
      this.exit(-1, 'sigkill')
  }*/
}

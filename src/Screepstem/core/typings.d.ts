export interface ProcessInterface {
    pid : number;
    parentPid: number;
    classPath: string;
    //run(): number;

}

interface ProcessMap {
    [pid: number]: ProcessInterface;
}


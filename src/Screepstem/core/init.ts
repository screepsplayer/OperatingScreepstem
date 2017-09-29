import { Process } from "./process";

export class Init extends Process {
    public pid: number;
    public parentPid: number;
    public classPath: string;
    public status: number;
    public memory: any;

    public run(): number {

        console.log("Init process running");
        return 0;
    }
}

// base class is there

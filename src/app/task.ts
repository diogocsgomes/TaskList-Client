import { tick } from "@angular/core/testing";
import { ServerRequests } from "./server-requests";


export class Task {
    taskName: string;
    id: number;
    done: boolean;

    constructor( idNum: number, taskDesc: string,isDone: boolean)
    {
        this.taskName = taskDesc;
        this.id = idNum;
        this.done = isDone;
    }
    

}

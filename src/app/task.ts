import { tick } from "@angular/core/testing";
import { ServerRequests } from "./server-requests";


export class Task {
    taskName: string;
    id: number;
    toDo: boolean;

    constructor( idNum: number, taskDesc: string,done: boolean)
    {
        this.taskName = taskDesc;
        this.id = idNum;
        this.toDo = done;
    }
    

}

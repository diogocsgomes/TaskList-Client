import { Component } from '@angular/core';
import { Task } from '../task';
import { ServerRequests } from '../server-requests';

@Component({
  selector: 'task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks :Task[];

  constructor(private serverRequests: ServerRequests) {
    
    this.tasks = serverRequests.getTasks();
    
    /*this.tasks = [
      new Task('Buy groceries', 1, false),
      new Task('Complete Angular tutorial', 2, true),
      new Task('Call Mom', 3, false),
      new Task('Walk the dog', 4, true),
      new Task('Read a book', 5, false),
    ];*/
    
  }

/*
  tasks: Task[] = [
    new Task('Buy groceries', 1, false),
    new Task('Complete Angular tutorial', 2, true),
    new Task('Call Mom', 3, false),
    new Task('Walk the dog', 4, true),
    new Task('Read a book', 5, false),
  ];
*/
  buttonClick(){
    this.serverRequests.test();
  }

  

}

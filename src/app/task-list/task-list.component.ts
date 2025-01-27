import { Component } from '@angular/core';
import { Task } from '../task';
import { ServerRequests } from '../server-requests';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks :Observable<Task[]>;

  taskForm = new FormGroup({
    taskDesc : new FormControl('')
  });
  //tasks$: Observable<Task[]>;

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

  

  changeToDone(task : Task){
    this.serverRequests.changeToDone(task).subscribe(() =>{
      this.tasks = this.serverRequests.getTasks();
    });
  }
  changeToUndone(task: Task){
    this.serverRequests.changeToUndone(task).subscribe(() =>{
      this.tasks = this.serverRequests.getTasks();
    });
  }

  deleteTask(task: Task){
    this.serverRequests.deleteTask(task).subscribe(() => 
    {
      this.tasks = this.serverRequests.getTasks();
    })
  }

  addTask(){

    if(this.taskForm.value.taskDesc === null || this.taskForm.value.taskDesc?.trim() === '')
    {
      console.log('no named added');
      return;

    }

    let taskToCreate = this.taskForm.value.taskDesc?.toString();
    this.serverRequests.addTask(this.taskForm.value.taskDesc?.toString()!).subscribe(() =>{
      this.tasks = this.serverRequests.getTasks();
    });
    console.log('i want to add ' + this.taskForm.value.taskDesc);
    this.taskForm.reset();
    //this.taskForm.value.taskDesc = '';
  }

  

}

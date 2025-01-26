import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./task";

//@Injectable({providedIn: 'root'})
@Injectable({providedIn: 'root'})
export class ServerRequests {

        
    constructor(private http: HttpClient) {
        
    // This service can now make HTTP requests via `this.http`.
  }
  test(){
    /*this.http.get<{message: string}>('http://127.0.0.1:3000/hello').subscribe(config => {
        // process the configuration.
        console.log(config.message);
      });
*/
      this.http.get('http://127.0.0.1:3000/hello', { responseType: 'text' })
      .subscribe((response) => {
        console.log( response);
      });

  }



  getTasks(): Task[]{
    
    let toReturn: Task[] = [];

    this.http.get<any[]>('http://127.0.0.1:3000/task').subscribe(
      (data) => {
        toReturn = data.map((task) => new Task(task.id, task.taskName, task.toDo)); // Convert to Task objects
        console.log(toReturn); // Log or handle the tasks array
      },
      (error) => {
        console.error('Error fetching tasks:', error); // Handle error
      }
    );
    return toReturn;
  }



 
}

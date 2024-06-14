import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './models/to-do';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'AngToDoLab';

  formToDo: ToDo = {} as ToDo;
  allToDos:ToDo [] = [
    {
      task: "Cut Grass",
      completed: true,
      duration: .5,
      priority: "high"

  },
  {
      task: "dishes",
      completed: false,
      duration: .25,
      priority: "high"
  },
  {
      task: "vaccuum",
      completed: false,
      duration: .25,
      priority: "medium"
  },
  ]
  completeTask(targetToDo:ToDo):void{
    targetToDo.completed = true;
  }
  deleteTask(targetToDo:ToDo):void{
    let index:number = this.allToDos.findIndex(p=> p == targetToDo);
    this.allToDos.splice(index, 1)
}

AddTask():void{
  let newToDo:ToDo = {...this.formToDo};
      this.formToDo.completed= false;
      this.allToDos.push(newToDo);
      console.log(this.allToDos);
}




}

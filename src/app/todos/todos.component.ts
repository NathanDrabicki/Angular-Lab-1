import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  tasks: Todo[];

  constructor() {}

  ngOnInit(): void {}
}
interface Todo {
  task: string;
  completed: boolean;
}

const addToDo = (task: string): Todo[] => {
  let newTask: string;
  return this.task.tasks.push('Take out trash');
};

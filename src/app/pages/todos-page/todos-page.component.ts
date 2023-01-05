import { Router } from '@angular/router';
import { ITodo } from './todo.interface';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos: ITodo[] = []

  limitTodos = new FormControl(10);

  filterTodos = new FormControl(false)

  todosArray: ITodo[] = [];

  constructor( private todosService: TodosService, private router: Router) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((data: ITodo[]) => {
      this.todos = data
      this.todosArray = data.slice(0, 10)
    })
  }

  limitTodosAmount(number: number) {
    this.todosArray = this.todos.slice(0, number)
  }

  filterCompleted() {
    if (this.filterTodos.value === true) {
      this.todosArray = this.todosArray.filter(todo => !todo.completed)
    } else {
      this.todosArray = this.todos.slice(0, this.limitTodos.value!)
    }
  }

  addTodo() {
    this.router.navigate(['add'])
  }
}

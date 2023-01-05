import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor( private todoService: TodosService) { }

  ngOnInit(): void {
  }

  submitTodo() {
    this.todoService.addTodo()
  }

}

import { ITodo } from './../../pages/todos-page/todo.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo = {} as ITodo;

  constructor() { }

  ngOnInit(): void {

  }

}

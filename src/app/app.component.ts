import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  items: number = 0;
  numberOfPages: number = 0;
  perPage: number = 15;

  currentPage = 1;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this._todoService.getTodos().subscribe((data) => {
      this.todos = data.filter((el, index) => (index >= (this.currentPage - 1)*this.perPage) && index < this.currentPage * this.perPage);
      this.items = data.length;
      this.numberOfPages = Math.ceil(this.items / this.perPage);
    });
  }

  pageChangeEvent(page: number): void {
    this.currentPage = page;
    this.getTodos();
  }
}

//kasnije,iako angular ima svoj validator,opet trebamo redex koristiti ?

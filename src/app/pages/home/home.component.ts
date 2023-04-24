import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  items: number = 0;
  numberOfPages: number = 0;
  perPage: number = 15;

  currentPage = 1;

  constructor(private _todoService: TodoService,
    private _route: ActivatedRoute,
    private _router: Router
    // private _storageService: StorageService
  ) {}

  ngOnInit(): void {
    // const params = this._storageService.getParams();
    // this.perPage = params.perPage;
    // this.currentPage = params.page;
    this._route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? params['page'] : 1;
      this.perPage = params['perPage'] ? params['perPage'] : 15;
      this.getTodos();
    });
  }

  getTodos(): void {
    this._todoService.getTodos().subscribe((data) => {
      this.todos = data.filter((el, index) => (index >= (this.currentPage - 1)*this.perPage) && index < this.currentPage * this.perPage);
      this.items = data.length;
      this.numberOfPages = Math.ceil(this.items / this.perPage);
      if (!this.todos.length) {
        this.currentPage = 1;
        this._router.navigate([], {queryParams: {page: this.currentPage, perPage: this.perPage}});
        this.getTodos();
      }
    });
  }

  pageChangeEvent(page: number): void {
    this.currentPage = page;
    this._router.navigate([], {queryParams: {page: this.currentPage, perPage: this.perPage}});
    // this._storageService.saveParams(this.currentPage, this.perPage);
    this.getTodos();
  }

  perPageChangeEvent(perPage: number): void {
    this.perPage = perPage;
    this._router.navigate([], {queryParams: {perPage: this.perPage, page: this.currentPage}});
    // this._storageService.saveParams(this.currentPage, this.perPage);
    this.getTodos();
  }
}
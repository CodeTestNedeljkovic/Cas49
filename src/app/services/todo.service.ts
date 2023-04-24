import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this._http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}

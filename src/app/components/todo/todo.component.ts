import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() userId: number = 0;
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() completed: boolean = false;
}

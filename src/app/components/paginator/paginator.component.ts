import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  @Input() numberOfPages: number = 0;
  @Input() perPage: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() perPageChange: EventEmitter<number> = new EventEmitter<number>();

  changePage(page: number): void {
    if (page === this.currentPage) {
      return;
    }
    this.pageChange.emit(page);
  }

  submitPerPage(): void {
    this.perPageChange.emit(this.perPage);
  }
}

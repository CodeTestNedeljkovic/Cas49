import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

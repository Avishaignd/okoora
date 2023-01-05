import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    TodosPageComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

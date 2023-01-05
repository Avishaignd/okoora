import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'home', component: TodosPageComponent},
  {path: 'add', component: AddTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

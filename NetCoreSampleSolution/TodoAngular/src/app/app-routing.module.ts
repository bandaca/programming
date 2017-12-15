import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo-list/:id', component: TodoItemComponent},
  { path: '', redirectTo: '/todo-list', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }

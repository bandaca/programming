import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _todoListService:TodoListService) { }
  todoItems: TodoItem[];
  ngOnInit() {
    this._todoListService.getItemByStatus(true).subscribe(
      todoItems => {
        this.todoItems = todoItems;
      }
    );
  }

}

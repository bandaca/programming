import { Component, OnInit } from '@angular/core';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { TodoItem } from '../todo-item';
import { TodoListService } from '../todo-list.service';
//import { TODOITEMS } from '../todo-items-mock';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, AfterContentInit {

  newItem : TodoItem = { id:0, name:"New Item", isComplete:false};
  todoItems : TodoItem[];
  selectedItem:TodoItem;
  constructor(private _todoListService: TodoListService) { }

  ngOnInit() {
    
    this._todoListService.getAllItems()
    .subscribe(todoItems => {
      this.todoItems = todoItems
      }
    );
  }

  save(item:TodoItem){
    console.log(item);
    this._todoListService.add(item)
    .subscribe( newItem => {
      this.todoItems.push(newItem);
    }
    );
  }

  ngAfterContentInit() {

  }

  onSelect(item: TodoItem): void {
    this.selectedItem = item;
  }

}

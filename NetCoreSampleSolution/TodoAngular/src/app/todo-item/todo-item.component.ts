import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TodoListService } from '../todo-list.service';
import { TodoItem } from '../todo-item';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  //@Input() todoItem: TodoItem;
  todoItem:TodoItem;
  constructor(private _todoListService: TodoListService, 
              private _route:ActivatedRoute, 
              private location:Location) { 

  }

  ngOnInit() {
    //this.todoItem = "Task 1";
    const id = +this._route.snapshot.paramMap.get('id');
    this._todoListService.getTodoItem(id)
    .subscribe(
        result => {
          this.todoItem = result;
        }
    );
  }

  goBack(): void {
    this.location.back();
  }

}

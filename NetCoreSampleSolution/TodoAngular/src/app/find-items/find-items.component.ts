import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { TodoItem  } from '../todo-item';
 import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-find-items',
  templateUrl: './find-items.component.html',
  styleUrls: ['./find-items.component.css']
})
export class FindItemsComponent implements OnInit {
  private numbers:number[] = [4,3,1,5,3,1];
  
  todoItems$: Observable<TodoItem[]>;
  private searchTerms = new Subject<string>();
  constructor(private _todoListService : TodoListService) { }


  ngOnInit() {
    this.todoItems$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this._todoListService.searchItem(term))
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}

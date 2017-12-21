import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { TodoItem } from './todo-item';
import { TODOITEMS } from './todo-items-mock';
import { MessageService } from './message.service';

@Injectable()
export class TodoListService {
  private todoApiUrl = 'http://localhost:5000/api/todo';
  

  constructor(private _http: HttpClient, private _messages: MessageService) { }

  getAllItems(): Observable<TodoItem[]> {
    return this._http.get<TodoItem[]>(this.todoApiUrl)
      .pipe(
        tap(todoItems => this.log("Fetched todo items")),
        catchError(this.handleError('getAllItems',[]))
    );
  }

  getTodoItem(id: number): Observable<TodoItem> {
    //this.log(`fetched item with id=${id}`);
    return this._http.get<TodoItem>(`${this.todoApiUrl}/${id}`)
    .pipe(
      tap(_=>this.log(`fetched item with id=${id}`)),
      catchError(this.handleError<TodoItem>('getTodoItem'))
    );
    //return of(TODOITEMS.find(item => item.id === id));
  }

  getItemByStatus(completed: boolean): Observable<TodoItem[]> {
    return this._http.get<TodoItem[]>(`${this.todoApiUrl}?status=${completed}`)
    .pipe(
      tap(_=>this.log(`Fetched TODO items where 'Is Completed' is ${completed}`)),
      catchError(this.handleError("getItemByStatus",[]))
    );
    //return of(TODOITEMS.filter(item => item.isComplete === completed));
  }

  searchItem(term:string): Observable<TodoItem[]>{
    return this._http.get<TodoItem[]> (`${this.todoApiUrl}?name=${term}`)
    .pipe(
      tap(_=>this.log(`Fetched TODO items where 'Name' contains ${term}`)),
      catchError(this.handleError("searchItem",[]))
    );
  }

  add(item:TodoItem): Observable<TodoItem>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.post<TodoItem>(this.todoApiUrl,item,httpOptions)
    .pipe(
      tap(_=>this.log(`Saved Todo Item`)),
      catchError(this.handleError<TodoItem>("add"))
    );
  }

  private log(message: string) {
    this._messages.add(`TodoListService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

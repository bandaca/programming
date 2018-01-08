import * as types from '../types/index';
import { ActionsObservable, combineEpics} from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs';
import { Item } from '../models/Item';


export interface AddItem {
    type:types.ADD_ITEM;
    text:string;
}

export interface ToggleComplete {
    type:types.TOGGLE_COMPLETE
    index:number;
}

export interface DeleteItem {
    type:types.DELETE_ITEM;
    index:number;
}

export interface SetVisibilityFilter {
    type:types.SET_VISIBILITY_FILTER;
    filter:types.VisibilityFilter;
}

export interface SetTextFilter {
    type: types.SET_TEXT_FILTER;
    text:string;
}

export interface GetTodoItems{
    type: types.GET_TODO_ITEMS;
}

export interface ResponseGetTodoItems{
    type: types.RESPONSE_GET_TODO_ITEMS;
    items: Item[];
}


//ACTIONS TYPE
export type TodoAction = AddItem | ToggleComplete | SetVisibilityFilter | DeleteItem | SetTextFilter | GetTodoItems | ResponseGetTodoItems;

//ACTION CREATORS
export function addItem(text:string):AddItem {
    return {
        type:types.ADD_ITEM,
        text:text
    }
}

export function deleteItem(index: number):DeleteItem {
    return {
        type:types.DELETE_ITEM,
        index:index
    }
}

export function toggleComplete(index:number):ToggleComplete {
    return {
        type:types.TOGGLE_COMPLETE,
        index:index
    }
}

export function setVisibilityFilter(filter:types.VisibilityFilter): SetVisibilityFilter {
    return {
        type:types.SET_VISIBILITY_FILTER,
        filter:filter
    }
}

export function setTextFilter(text:string) {
    return {
        type:types.SET_TEXT_FILTER,
        text:text
    }
}

//Async action creators
export const GetTodoItems = () => ({type:types.GET_TODO_ITEMS});
export const ResponseGetTodoItems = (items:Item[]) =>({
    type:types.RESPONSE_GET_TODO_ITEMS,
    items
});

const TODO_API_URL = 'http://localhost:5000/api/todo';
    
//RxJS EPICS
const GetTodoItemsEpic = (action$:ActionsObservable<GetTodoItems>)  => 
    action$.ofType(types.GET_TODO_ITEMS)
    .mergeMap(action => 
        ajax.getJSON<Item[]>(TODO_API_URL).map(items => ResponseGetTodoItems(items))
    );

export const rootEpic = combineEpics<any>(
    GetTodoItemsEpic
);

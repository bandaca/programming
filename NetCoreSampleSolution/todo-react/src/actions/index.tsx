import * as types from '../types/index';


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



export type TodoAction = AddItem | ToggleComplete | SetVisibilityFilter | DeleteItem | SetTextFilter;

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
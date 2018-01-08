import {Item} from '../models/Item';

//STATE
export enum VisibilityFilter{
    ShowAll = 'SHOW_ALL',
    ShowComplete = 'SHOW_COMPLETE',
    ShowPending = 'SHOW_PENDING'
}

export interface StoreState {
    textFilter: string;
    visibilityFilter: VisibilityFilter;
    todos: Item[];
}

//ACTIONS
export const ADD_ITEM = 'ADD_ITEM';
export type ADD_ITEM = typeof ADD_ITEM;

export const DELETE_ITEM = 'DELETE_ITEM';
export type DELETE_ITEM = typeof DELETE_ITEM;

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export type TOGGLE_COMPLETE = typeof TOGGLE_COMPLETE;

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export type SET_TEXT_FILTER = typeof SET_TEXT_FILTER;

export const GET_TODO_ITEMS = 'GET_TODO_ITEMS';
export type GET_TODO_ITEMS = typeof GET_TODO_ITEMS;

export const RESPONSE_GET_TODO_ITEMS = 'RESPONSE_GET_TODO_ITEMS';
export type RESPONSE_GET_TODO_ITEMS = typeof RESPONSE_GET_TODO_ITEMS;
import {SET_TEXT_FILTER, SET_VISIBILITY_FILTER, VisibilityFilter} from '../types/index';
import { TodoAction } from '../actions/index'

export function textFilter(state:string = '', action:TodoAction) {
    switch(action.type){
        case SET_TEXT_FILTER:
            return action.text;
        default:
            return state;
    }
}

export function visibilityFilter(state:VisibilityFilter = VisibilityFilter.ShowAll, action:TodoAction) {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: 
            return state;
    }
}
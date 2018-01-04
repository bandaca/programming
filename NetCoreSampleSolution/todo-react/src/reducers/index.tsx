import { combineReducers } from 'redux';
import { todos } from './todos';
import { visibilityFilter, textFilter} from './filters'
import { StoreState } from '../types/index';

export const todoApp = combineReducers<StoreState>({
    todos,
    visibilityFilter,
    textFilter
});

export default todoApp;
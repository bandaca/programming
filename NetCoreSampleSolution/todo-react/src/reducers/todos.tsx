import { TodoAction } from '../actions/index';
import {Item} from '../models/Item';
import { ADD_ITEM, TOGGLE_COMPLETE, DELETE_ITEM } from '../types/index';
import update from 'immutability-helper';

export function todos(state:Item[] = [], action:TodoAction):Item[] {
    switch(action.type){
        case ADD_ITEM:
            let nItem:Item =  {id:state.length + 1, name:action.text, isComplete:false};
            return [...state, nItem];
        case DELETE_ITEM:
            console.log(`Item with index [${action.index}] is being deleted`);
            return update(state, { $splice: [[action.index, 1]] });
        case TOGGLE_COMPLETE:
            return state.map((item,index) => {
                if(index === action.index){
                    return Object.assign({},item,   {
                                                        id:item.id,
                                                        name:item.name,
                                                        isComplete:!item.isComplete
                                                    }
                                        );
                }
                return item;
            });
        default:
            return state;
    }
}
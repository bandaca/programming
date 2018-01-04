import {connect, Dispatch} from 'react-redux';
import DisplayList from '../components/DisplayList';
import * as types from '../types/index';
import * as actions from '../actions/index';
import {Item} from '../models/Item';

const filterTodosByText = (todos:Item[], filterText:string) => {
    return todos.filter((item) => {
        return (item.name.indexOf(filterText) !== -1);
    });
}

export function mapStateToProps(state:types.StoreState){
    return {
        list:filterTodosByText(state.todos, state.textFilter)
    }
}

export function mapDispatchToProps(dispatch:Dispatch<actions.TodoAction>){
    return {
        onDeleteItem: (index:number) => dispatch(actions.deleteItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
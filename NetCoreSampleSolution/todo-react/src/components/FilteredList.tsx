import * as React from 'react';
import DisplayListContainer from '../containers/DisplayListContainer';
import SearchTextContainer from '../containers/SearchTextContainer';
import AddItem from './AddItem';
import './FilteredList.css';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions/index';
import * as types from '../types/index';

export interface Props {
    dispatch: Dispatch<actions.TodoAction>;
}


class FilteredList extends React.Component<Props,object>{
    
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch({type:types.GET_TODO_ITEMS});        
    }

    render (){ 
        return(
            <div>
                <SearchTextContainer />
                <DisplayListContainer />
                <AddItem />
                <div>
                    <br /><br />
                    <a href="#" className="link button">Hover animation test!</a>
                </div>
            </div>
        )
    };
}

export default connect()(FilteredList);
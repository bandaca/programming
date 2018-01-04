import {connect, Dispatch} from 'react-redux';
import SearchText from '../components/SearchText';
import * as types from '../types/index';
import * as actions from '../actions/index';

export function mapStateToProps(state:types.StoreState){
    return {
        text:state.textFilter
    }
}

export function mapDispatchToProps(dispatch:Dispatch<actions.TodoAction>){
    return {
        onTextChanged: (text:string) => dispatch(actions.setTextFilter(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchText);
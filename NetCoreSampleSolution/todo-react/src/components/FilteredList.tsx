import * as React from 'react';
import DisplayListContainer from '../containers/DisplayListContainer';
import SearchTextContainer from '../containers/SearchTextContainer';
import AddItem from './AddItem';
import './FilteredList.css';

export interface StateProps {
    searchText: string;
}


function FilteredList() {
    return (
        <div>
            <SearchTextContainer />
            <DisplayListContainer />
            <AddItem />
            <div>
                <br /><br />
                <a href="#" className="link button">Hover animation test!</a>
            </div>
        </div>
    );
}

export default FilteredList;
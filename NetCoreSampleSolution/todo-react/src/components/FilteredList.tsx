import * as React from 'react';
import SearchText from './SearchText';
import DisplayList from './DisplayList';
import { Item } from '../models/Item';
import { IitemsCallbacks } from '../EventInterfaces';
import './FilteredList.css';

export interface StateProps {
    searchText: string;
}

export interface Props {
    ItemsList: Item[];
    ItemCallbacks: IitemsCallbacks;
}

class FilteredList extends React.Component<Props, StateProps> {
    constructor(props: Props) {
        super(props);
        this.state = { searchText: '' };
    }

    onUserInputChange(e: React.SyntheticEvent<HTMLInputElement>) {
        this.setState({ searchText: e.currentTarget.value });
    }

    onAddItemTextChange(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.props.ItemCallbacks.add(e.currentTarget.value);
            e.currentTarget.value = '';
        }
    }

    render() {
        return (
            <div>
                <SearchText value={this.state.searchText} onUserInput={this.onUserInputChange.bind(this)} />
                <DisplayList 
                    list={this.props.ItemsList}
                    searchText={this.state.searchText}
                    itemsCallbacks={this.props.ItemCallbacks} 
                />
                <div>
                    <span>Add Item:</span>
                    <input 
                        type="text"
                        placeholder="Enter task name and hit enter"
                        onKeyPress={this.onAddItemTextChange.bind(this)}
                    />
                </div>
                <div>
                    <br/><br />
                    <a href="#" className="link button">Hover animation test!</a>
                </div>
            </div>
        );
    }
}

export default FilteredList;
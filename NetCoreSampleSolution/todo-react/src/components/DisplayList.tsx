import * as React from 'react';
import DisplayItem from './DisplayItem';
import { Item } from '../models/Item';
import { IitemsCallbacks } from '../EventInterfaces';

export interface Props {
    list: Item[];
    searchText: string;
    itemsCallbacks: IitemsCallbacks;
}

class DisplayList extends React.Component<Props, object> {

    render() {
        let filteredList = this.props.list.filter((item) => {
            return (item.name.indexOf(this.props.searchText) !== -1);
        });
        return (
            <ul>
                {filteredList.map(
                    (item, index) => <DisplayItem 
                                        key={item.id}
                                        displayItem={item}
                                        itemsCallbacks={this.props.itemsCallbacks}
                                        itemIndex={index}
                    />
                )
                }
            </ul>
        );
    }
}

export default DisplayList;
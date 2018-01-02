import * as React from 'react';
import { Item } from '../models/Item';
import { IitemsCallbacks } from '../EventInterfaces';

export interface Props {
    itemIndex: number;
    displayItem: Item;
    itemsCallbacks: IitemsCallbacks;
}

class DisplayItem extends React.Component<Props, object> {
    render() {
        return (
            <li key={this.props.displayItem.id}>
                <a 
                    href="#" 
                    onClick={
                                this.props.itemsCallbacks.delete.bind(
                                                                        null,
                                                                        this.props.displayItem.id,
                                                                        this.props.itemIndex
                                                                    )
                            }
                >
                    {this.props.displayItem.name}
                </a>
            </li>
        );
    }
}

export default DisplayItem;
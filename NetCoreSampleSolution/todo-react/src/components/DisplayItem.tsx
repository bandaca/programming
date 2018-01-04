import * as React from 'react';
import { Item } from '../models/Item';
//import { IitemsCallbacks } from '../EventInterfaces';

export interface Props {
    itemIndex: number;
    displayItem: Item;
    onDeleteItem : (index:number) => void;
    //itemsCallbacks: IitemsCallbacks;
}

function DisplayItem({itemIndex, displayItem, onDeleteItem}:Props) {
    return (
        <li key={displayItem.id}>
            <a 
                href="#" 
                onClick={ e => {
                                    e.preventDefault();
                                    onDeleteItem(itemIndex)
                                } 
                        }
            >
                {displayItem.name}
            </a>
        </li>
    );
}

export default DisplayItem;
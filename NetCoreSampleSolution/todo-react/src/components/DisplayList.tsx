import * as React from 'react';
import DisplayItem from './DisplayItem';
import { Item } from '../models/Item';

export interface Props {
    list: Item[];
    //searchText: string;
    onDeleteItem: (index: number) => void;
}

function DisplayList({ list, onDeleteItem }: Props) {
    return (
        <div>
            <ul>
                {list.map(
                    (item, index) => <DisplayItem
                        key={item.id}
                        displayItem={item}
                        onDeleteItem={onDeleteItem}
                        itemIndex={index}
                    />
                )
                }
            </ul>
            <div>
                <span>Count: {list.length}</span>
            </div>
        </div>
    );
}

export default DisplayList;
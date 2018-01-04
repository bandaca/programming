import * as React from 'react';
import 'whatwg-fetch';
import { Item } from '../models/Item';
//import FilteredList from './FilteredList';
import update from 'immutability-helper';

export interface StateProps {
    items: Item[];
}

class TodoListContainer extends React.Component<object, StateProps> {
    private readonly TODO_API_URL = 'http://localhost:5000/api/todo';
    private readonly TODO_API_HEADERS = { 'content-type': 'application/json' };

    constructor(props: object) {
        super(props);
        this.state = { items: [] };
    }

    addItem(name: string) {
        let newItem = { id: 0, name: name, isComplete: false };
        let nextState = update(this.state.items, { $push: [newItem] });
        this.setState({ items: nextState });
        fetch(this.TODO_API_URL, { headers: this.TODO_API_HEADERS, method: 'post', body: JSON.stringify(newItem) })
            .then((resp) => resp.json())
            .then((item) => {
                newItem.id = item.id;
                this.setState({ items: nextState });
                console.log(`Item name: ${name} added!`);
            });
    }

    deleteItem(id: number, index: number) {
        let nextState = update(this.state.items, { $splice: [[index, 1]] });
        this.setState({ items: nextState });
        fetch(`${this.TODO_API_URL}/${id}`, { headers: this.TODO_API_HEADERS, method: 'delete' })
            .then((resp) => {
                console.log(`Item with id ${id} deleted!`);
            });
    }

    componentDidMount() {

        fetch(this.TODO_API_URL, { headers: this.TODO_API_HEADERS })
            .then((response) => response.json())
            .then((respData) => {
                this.setState({ items: respData });
            })
            .catch((error) => {
                console.log(`GET ITEMS ERROR`, error);
            });
    }

    render() {
        return (
            /*<FilteredList 
                ItemsList={this.state.items}
                ItemCallbacks={
                    { 
                        add: (name: string) => this.addItem(name),
                        delete: (id: number, index: number) => this.deleteItem(id, index)
                    }
                } 
            />*/
            <div/>
        );
    }
}

export default TodoListContainer;
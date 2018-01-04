import * as React from 'react';
import * as actions from '../actions/index';
import { connect, Dispatch } from 'react-redux';

export interface Props {
    dispatch: Dispatch<actions.TodoAction>;
}

let AddItem = ({ dispatch }:Props) => {
    let input:HTMLInputElement|null;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input || !input.value.trim()) {
                        return
                    }
                    dispatch(actions.addItem(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default connect()(AddItem);
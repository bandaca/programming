import * as React from 'react';
import { ItextChangeCallback } from '../EventInterfaces';

export interface Props {
    value: string;
    onUserInput: ItextChangeCallback;
}

class SearchText extends React.Component<Props, object> {
    onTextChanged(e: React.SyntheticEvent<HTMLInputElement>) {
        this.props.onUserInput(e);
    }

    render() {
        return (
            <div>
                Search Item: <input type="search" value={this.props.value} onChange={this.onTextChanged.bind(this)} />
            </div>
        );
    }
}

export default SearchText;
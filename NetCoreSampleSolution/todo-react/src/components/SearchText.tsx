import * as React from 'react';

export interface Props {
    text: string;
    onTextChanged: (text: string) => void;
}

const SearchText = ({ text, onTextChanged }: Props) => {
    return (
        <div>
            Search Item:
                <input type="search"
                value={text}
                onChange={e => {
                            onTextChanged(e.target.value);
                        }
                }
            />
        </div>
    );
}

export default SearchText;
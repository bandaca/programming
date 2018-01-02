// src/components/Hello.tsx

import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export interface PropsState {
  inputText: string;
}

class Hello extends React.Component<Props,PropsState> {

  constructor(props:Props){
    super(props);
    this.state = { inputText : "Can be changed"};
  }

  handleTextChange(event:any){
    this.setState({ inputText : event.target.value});
  }

  render(){
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}<br/>
          <input type="text" value={this.state.inputText} onChange={this.handleTextChange.bind(this)}/><br/>
          <span>{this.state.inputText}</span>+
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
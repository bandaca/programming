import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import TodoListContainer from './components/TodoListContainer';

ReactDOM.render(
  // <App />,
  <div>
    <TodoListContainer />
  </div>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

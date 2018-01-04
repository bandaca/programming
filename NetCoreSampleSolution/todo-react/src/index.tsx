import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import FilteredList from './components/FilteredList';
import { StoreState } from './types/index';
import { todoApp } from './reducers/index';
import * as types from './types/index';
import { Provider } from 'react-redux';


const store = createStore<StoreState>(todoApp,{ 
                                                todos:[{id:1,name:'Task 1',isComplete:false},{id:2,name:'Task 2',isComplete:false}],
                                                visibilityFilter: types.VisibilityFilter.ShowAll,
                                                textFilter: ''
                                              });

ReactDOM.render(
  // <App />,
  <Provider store={store}>
      <FilteredList />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

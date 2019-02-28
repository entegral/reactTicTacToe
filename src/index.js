import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import boardReducer from './reducers/board-reducer';
import { Provider } from 'react-redux';

const store = createStore(boardReducer);

const render = (Component) => {

  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );

};

render(App);

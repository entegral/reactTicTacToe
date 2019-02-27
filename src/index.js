import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { HashRouter } from 'react-router-dom';



// ========================================

const render = (Component) => {

  ReactDOM.render(
    <HashRouter>
      <Component />
    </HashRouter>,
    document.getElementById('root')
  );

};

render(App);

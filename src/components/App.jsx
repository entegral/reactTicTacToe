import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game'
import Info from './Info'

function App (props){
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Game} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </React.Fragment>
  )
};

export default App;

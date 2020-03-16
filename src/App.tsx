import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import LunchPicker from './views/LunchPicker';
import PrivateRoute from './components/PrivateRoute';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/lunch-picker" exact component={LunchPicker}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

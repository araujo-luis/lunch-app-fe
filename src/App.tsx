import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import LunchPicker from './views/LunchPicker';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/navigation';
import Footer from './components/Footer';

const App: FC = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <PrivateRoute path="/lunch-picker" exact component={LunchPicker}></PrivateRoute>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

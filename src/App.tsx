import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import LunchPicker from './views/LunchPicker';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/navigation';
import Footer from './components/Footer';
import LunchForm from './views/LunchForm';
import { useAuth0 } from './context/Auth0Context';

const App: FC = () => {
  const { isAuthenticated } = useAuth0();
  return (

    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {isAuthenticated ?
          <>
            <PrivateRoute path="/lunch-picker" exact component={LunchPicker}></PrivateRoute>
            <PrivateRoute path="/lunch-form" exact component={LunchForm}></PrivateRoute>

          </> : null
        }
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

import React, { FC } from 'react';
import './App.css';
import Home from './views/Home';

const App: FC = () => {
  return (
    <div className="App container-fluid">
      <h1>App</h1>
      <Home/>
    </div>
  );
}

export default App;

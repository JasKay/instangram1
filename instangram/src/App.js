import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Topbar from './components/Topbar'


function App() {
  return (
    <div className="App">
      <Topbar />
      <Greet />
      <Welcome/>
    </div>
  );
}

export default App;

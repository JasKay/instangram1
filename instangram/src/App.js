import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Topbar from './components/Topbar'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman"  />
        <Topbar />
        <Welcome/>
      </div>
    );
  }
}

export default App;

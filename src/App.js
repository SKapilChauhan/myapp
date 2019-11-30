import React from 'react';
import logo from './logo.svg';
import { Link, Route } from 'react-keeper';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      param: 1
   }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to <b>Shogee</b>
          </p>
          
          <Link className="App-link" to={'/list'}>List Page</Link> 
        </header>
      </div>
    );
  }
}

export default App;

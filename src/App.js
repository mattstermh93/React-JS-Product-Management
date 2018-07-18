import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

class App extends Component {
constructor() {
  super()
  this.state = {
    name: 'Matt',
    occupation: 'Engineer'
  }
}

  render() {
    return (
      <div className="App">
        <Header my_name={this.state.name} my_occupation={this.state.occupation} />
      </div>
    );
  }
}

export default App;

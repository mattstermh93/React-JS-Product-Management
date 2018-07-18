import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';

class App extends Component {
constructor() {
  super()
  this.state = {
    name: '', //best practice to leave this as null
    occupation: '',
    products: []
  }
}

componentWillMount() {
  this.setState(
    {
      name: 'Matt',
      occupation: 'Engineer',
      products: [
        {
          id: 101,
          name: 'Soap',
          price: 3.99
        },
        {
          id: 102,
          name: 'Chicken',
          price: 7.49
        }
      ]
    }
  )
}

  render() {
    return (
      <div className="App">
        <Header my_name={this.state.name} my_occupation={this.state.occupation} />

        <div className="container">
          <div className="row">
            <Products items={this.state.products}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import AddProduct from './components/addProduct';
import Animals from './components/animals';

class App extends Component {
constructor() {
  super()
  this.state = {
    name: '', //best practice to leave this as null
    occupation: '',
    products: [],
    searchTerm: '',
    animals: []
  }

  this.onSearch = this.onSearch.bind(this);
  this.isSearched = this.isSearched.bind(this);
  this.handleAddProduct = this.handleAddProduct.bind(this);

}

componentWillMount() {
  this.setState(
    {
      name: 'Matt',
      occupation: 'Engineer',
      products:
        [
          {
            "id": "101",
            "title":"Hand Sanitizer",
            "price":1.99
          },
          {
            "id": "102",
            "title":"Soap",
            "price":2.99
          },
          {
            "id": "103",
            "title":"Pizza",
            "price":3.99
          },
          {
            "id": "104",
            "title":"Burgers",
            "price":4.99
          },
          {
            "id": "105",
            "title":"Milk",
            "price":3.10
          },
          {
            "id": "106",
            "title":"Eggs",
            "price":1.87
          },
          {
            "id": "107",
            "title":"Bread",
            "price":4.56
          },
          {
            "id": "108",
            "title":"Bananas",
            "price":4.59
          }

      ],
      searchTerm:'',
      animals: []
    }
  )
}

componentDidMount() {
  fetch('https://learnwebcode.github.io/json-example/animals-1.json')
    .then(response => response.json())
    .then(data => this.setState({animals: data}));
}

onSearch(e) {
  this.setState( {
    searchTerm: e.target.value
  });
}

isSearched(term) {
  return function(item) {
    return item.title.toLowerCase().includes(term.toLowerCase());
  }
}

handleAddProduct(product) {
  let current_prods = this.state.products;
  current_prods.push(product);
  this.setState({products: current_prods})
}

generateID () {
  return this.state.products.length + 101;
}

getTotal() {
  let total = 0;
  this.state.products.map(item => {
    total += item.price;
  })
  return total;
}

  render() {
    console.log(this.state.animals)
    return (
      <div className="App">
        <Header onSearch={this.onSearch} my_name={this.state.name} my_occupation={this.state.occupation} />

        <div className="container">
          <div className="row">
            <AddProduct generateID={this.generateID()} handleAddProduct={this.handleAddProduct}/>
            <Products total={this.getTotal()} term={this.state.searchTerm} items={this.state.products} isSearched={this.isSearched}/>
            </div>
            <div className="row">
              <Animals animals={this.state.animals}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

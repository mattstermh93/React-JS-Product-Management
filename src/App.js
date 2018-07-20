import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import AddProduct from './components/addProduct';
import Animals from './components/animals';
import firebase from './firebase';

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
  this.handleRemoveProduct = this.handleRemoveProduct.bind(this);

}

componentWillMount() {
  this.setState(
    {import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        </nav>
      </div>
    );
  }
}

export default Header;

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
  //add products fo firebase
  let prodRef = firebase.database().ref('products');
  prodRef.push(this.state.products)
}


componentDidMount() {
  this.displayList();
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

displayList() {
    const prodsRef = firebase.database().ref('products');
    prodsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      if (products != null) {
        for (let index in products) {
          newState.push({
            id: products[index].id,
            title: products[index].title,
            price: products[index].price
          });
        }
      }
      this.setState({
        products: newState
      });
    });
  }

handleAddProduct(product) {
  let current_prods = this.state.products;
  current_prods.push(product);
  this.setState({products: current_prods})

  //add new product to firebase
  firebase.database().ref('products').set(current_prods);
  this.displayList();
}

handleRemoveProduct(id) {
  let current_prods = this.state.products;
  for (let index in current_prods) {
    if (current_prods[index].id === id) {
      current_prods.splice(index, 1)
    }
  }
  this.setState({products: current_prods})

  //generate new product state in firebase
  firebase.database().ref('products').set(current_prods);
  this.displayList();
}

generateID () {
  let id = this.state.products.length + 101;
  let current_prods = this.state.products;
  //check to see if id is already used
  let flag;
  do {
    flag = false
    for (let index in current_prods) {
      if (current_prods[index].id === id) {
        id++;
        flag=true;
      }
    }
  } while (flag === true);

  return id
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
            <Products handleRemoveProduct={this.handleRemoveProduct} total={this.getTotal()} term={this.state.searchTerm} items={this.state.products} isSearched={this.isSearched}/>
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

import React, { Component } from 'react';

class RemoveProduct extends Component {
  constructor() {
    super();
    this.state = {
      newProduct: {}
    }
  }

  removeProduct = e=> {
    e.preventDefault();
    this.setState({
      newProduct: {
        id: this.props.generateID,
        title: this.refs.title.value,
        price: parseFloat(this.refs.price.value, 10)
      }
    }, function() {
      this.props.handleRemoveProduct(this.state.newProduct);
    });
  }


  render() {
    return (
      <div className="RemoveProduct col-md-6">
        <h3> Add New Product</h3>
        <form onSubmit={this.RemoveProduct}>
          <label>Product Name</label>
          <input type="text" placeholder="Name..." ref="title" />
          <label>Product Price:</label>
          <input type="text" placeholder="Price..." ref="price" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RemoveProduct;

import React, { Component } from 'react';
import ProductItem from './productItem';

class Products extends Component {
  render() {
    let items;
    if (this.props.items) {
      items = this.props.items.filter(this.props.isSearched(this.props.term)).map(item => {
        return <ProductItem key={item.id} item={item}/>
      })
    }

    return (
      <div className="Products col-md-6 offset-md-3">
        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
        <tfoot>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Total: $0.00</th>
        </tr>
        </tfoot>
        </table>
      </div>
    );
  }
}

export default Products;

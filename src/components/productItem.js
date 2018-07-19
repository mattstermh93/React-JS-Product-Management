import React, { Component } from 'react';

class ProductItem extends Component {
  render() {

    function twoDecimals(num) {
      return num.toFixed(2);
    }

    return (
      <tr className="ProductItem">
        <th scope="row">{this.props.item.id}</th>
        <td>{this.props.item.title}</td>
        <td>${twoDecimals(this.props.item.price)}
        <button className="badge badge-danger float-right"
        onClick={() => alert('remove')}>
        Remove
        </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

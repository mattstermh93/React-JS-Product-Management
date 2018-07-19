import React, { Component } from 'react';

class AnimalItem extends Component {

  render() {
    return (
        <tr className="AnimalItem">
        <th scope="row">"{this.props.item.name}"</th>
        <td>{this.props.item.species}</td>
        <td>{this.props.item.foods.likes[0]+ ' '}
            {this.props.item.foods.likes[1]}
        </td>
        <td>{this.props.item.foods.dislikes[0]+ ' '}
            {this.props.item.foods.dislikes[1]}
        </td>

      </tr>
    );
  }
}

export default AnimalItem;

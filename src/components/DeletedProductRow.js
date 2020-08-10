import React, { Component } from 'react';

//Component responsible for move component to bottom list 

class DeletedProductRow extends Component {
    render() {
        return (
            this.props.arrayOfProducts.map(element => element.done ?
                <tr key={element.id}>
                    <td>{element.productName}</td>
                    <td>{element.calories}</td>
                    <td>{element.quantity}</td>
                </tr> : null)
        )
    }
}

export default DeletedProductRow;
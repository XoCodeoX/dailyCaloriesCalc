import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        return (
            this.props.arrayOfProducts.map(element => !element.done ?
                <tr key={element.id}>
                    <td>{element.productName}</td>
                    <td>{element.calories}</td>
                    <td>{element.quantity}</td>
                    <td>
                        <input type="checkbox" checked={element.done} onChange={() => this.props.callback(element)} />
                    </td>
                </tr> : null)

        )
    }
}

export default ProductRow;
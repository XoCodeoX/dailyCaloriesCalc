import React, { Component } from 'react';

//Component contains form elements (inputs,buttons)

class FormElements extends Component {
    render() {
        return (
            <div className="my-1">

                <input type="text"
                    name="prodName"
                    className="form-control mb-3"
                    placeholder="Podaj nazwę produktu"
                    onChange={this.props.callback}
                    value={this.props.productName} />

                <input type="text"
                    name="prodCalories"
                    className="form-control mb-3 "
                    placeholder="Podaj kalorie"
                    onChange={this.props.callback}
                    value={this.props.productCalories} />

                <input type="text"
                    name="prodQuantity"
                    className="form-control mb-3"
                    placeholder="Podaj liczbę sztuk"
                    onChange={this.props.callback}
                    value={this.props.productQuantity} />

                <button onClick={this.props.addProduct} className="btn btn-primary mt-1 mb-4">Dodaj do listy produktów</button>
            </div>
        )
    }
}

export default FormElements;
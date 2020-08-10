import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import FormElements from './FormElements';
import ProductRow from './ProductRow';
import DeletedProductRow from './DeletedProductRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfProducts: [
        { id: 0, productName: "Bułka", calories: 30, quantity: 3, done: false }
      ],
      inputProductName: "",
      inputProductCaloriesValue: "",
      inputQuantityValue: "",
      calloriesSummary: "",
    }
  }

  // tempAlert = (msg, duration) => {
  //   let el = document.createElement("div");
  //   el.classList.add("alert-box")
  //   el.innerHTML = msg;
  //   setTimeout(function () {
  //     el.parentNode.removeChild(el);
  //   }, duration);
  //   document.body.appendChild(el);
  // }


  handleChange = (e) => {

    //Function used to handle change in form inputs 

    if (e.target.name === "prodName") {
      this.setState({
        inputProductName: e.target.value,
      })
    }
    else if (e.target.name === "prodCalories") {
      this.setState({
        inputProductCaloriesValue: e.target.value,
      })
    }
    else if (e.target.name === "prodQuantity") {
      this.setState({
        inputQuantityValue: e.target.value,
      })
    }
  }


  //Function that adds a product object to array

  addProduct = () => {

    //Simple id generator
    let idGenerator = Math.floor(Math.random() * 9999 - 1 + 1);

    //Instruction used to check cases if user types wrong values

    if (this.state.inputProductName &&
      this.state.inputProductCaloriesValue &&
      this.state.inputQuantityValue &&
      !isNaN(this.state.inputProductCaloriesValue) &&
      !isNaN(this.state.inputQuantityValue) &&
      typeof (parseInt(this.state.inputProductCaloriesValue) === "number") &&
      typeof (parseInt(this.state.inputQuantityValue) === "number")
    ) {

      this.setState({
        arrayOfProducts: [...this.state.arrayOfProducts,
        {
          id: idGenerator,
          productName: this.state.inputProductName,
          calories: this.state.inputProductCaloriesValue,
          quantity: this.state.inputQuantityValue,
          done: false,
        }],
        inputProductName: "",
        inputProductCaloriesValue: "",
        inputQuantityValue: "",

      })

      this.tempAlert(`Dodałeś ${this.state.inputProductName}`, 2000)
    }

    else {
      alert("Proszę wprowadzić poprawne wartości")
    }


  }




  render() {
    return (
      <div className="container">
        <Header />
        <div className="containter-fluid">
          <FormElements callback={this.handleChange}
            addProduct={this.addProduct}
            productName={this.state.inputProductName} productCalories={this.state.inputProductCaloriesValue} productQuantity={this.state.inputQuantityValue} />
          <table className="table table-striped table-bordered">
            <thead><tr>
              <th>Produkt</th><th>Kcal</th><th>Szt.</th><th>Usuń</th>
            </tr></thead>
            <tbody><ProductRow /></tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <div>Spożyte produkty</div>
          </div>
          <table className="table table-striped table-bordered">
            <thead><tr>
              <th>Produkt</th><th>Kalorie</th>
            </tr></thead>
            <tbody><DeletedProductRow /></tbody>
          </table>
          <div className="resultBlock">kcal</div>
        </div>
      </div>
    )
  }
}
export default App;

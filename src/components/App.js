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
      arrayOfProducts: [],
      inputProductName: "",
      inputProductCaloriesValue: "",
      inputQuantityValue: 0,
      calloriesSummary: 0,
    }
  }
  render() {
    return (
      <div className="contatiner">
        <Header />
        <div className="containter-fluid">
          <FormElements />
          <table className="table table-striped table-bordered">
            <thead><tr>
              <th>Produkt</th><th>Kcal</th><th>szt.</th><th>Usuń</th>
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
          <button className="btn btn-primary mt-1 mb-4">Pobierz raport</button>
        </div>
      </div>
    )
  }
}
export default App;

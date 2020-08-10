import React, { Component } from 'react';
import './App.css';

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
      </div>
    )
  }
}
export default App;

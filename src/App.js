import "./App.css";
import React, { Component } from "react";
import Header from "../src/components/Header";
import CalculatorAmount from "../src/components/CalculatorAmount";
import CalculatorCurrency from "../src/components/CalculatorCurrency";
import CalculatorConvert from "../src/components/CalculatorConvert";
import Outcome from "../src/components/Outcome";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: {
        EUR: 0,
        USD: 0,
        CHF: 0,
      },
      amount: 0,
      currency: "EUR",
      exchangeAmount: 0,
    };
  }

  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/c/")
      .then((d) => d.json())
      .then((d) => {
        this.setState((state) => ({
          rates: {
            EUR: d[0].rates[3].ask,
            USD: d[0].rates[0].ask,
            CHF: d[0].rates[5].ask,
          },
        }));
      })
      .catch((err) => console.log(err));
  }

  getAmount = (amount) => {
    this.setState({ amount });
  };

  getCurrency = (currency) => {
    this.setState({ currency });
  };

  exchangeAmountFn = () => {
    this.setState({
      exchangeAmount: this.state.rates[this.state.currency] * this.state.amount,
    });
  };

  render() {
    return (
      <>
        <Header></Header>
        <div className="calculator" id="calculator">
          <CalculatorAmount getAmount={this.getAmount}></CalculatorAmount>
          <CalculatorCurrency
            getCurrency={this.getCurrency}
          ></CalculatorCurrency>
          <CalculatorConvert
            onBtnClick={this.exchangeAmountFn}
          ></CalculatorConvert>
        </div>
        <Outcome text={this.state.exchangeAmount.toFixed(2)}></Outcome>
      </>
    );
  }
}

export default App;

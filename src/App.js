import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    navButtonReset: "Reset",
    navStatus: "Items",
    navAggresivity: "7",
    buttonAcceptOffer: "Accept",
    buttonCounterOffer: "CounterOffer",
    fieldCart: 0,
    fieldOurOffer: 0,
    fieldYourOffer: 0,
    fieldOffer: 0,
    fieldYouSave: 0,

    numeButon: "buton1",

    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
      { id: 5, value: 4 },
      { id: 6, value: 4 },
      { id: 7, value: 4 },
      { id: 8, value: 4 },
      { id: 9, value: 4 },
      { id: 10, value: 4 },
    ],
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Monunted");
  }

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters]; //clones array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          navAggresivity={this.state.navAggresivity}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

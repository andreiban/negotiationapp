import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Dropdown from "./components/dropdown";

const items = [
  {
    id: 1,
    value: "Aggresion Lvl1",
    aggresion: Number((-0.07 - Math.random() * 0.075).toFixed(2)),
  },
  {
    id: 2,
    value: "Aggresion Lvl2",
    aggresion: Number((-0.065 - Math.random() * 0.07).toFixed(2)),
  },
  {
    id: 3,
    value: "Aggresion Lvl3",
    aggresion: Number((-0.06 - Math.random() * 0.065).toFixed(2)),
  },
  {
    id: 4,
    value: "Aggresion Lvl4",
    aggresion: Number((-0.055 - Math.random() * 0.06).toFixed(2)),
  },
  {
    id: 5,
    value: "Aggresion Lvl5",
    aggresion: Number((-0.05 - Math.random() * 0.055).toFixed(2)),
  },
  {
    id: 6,
    value: "Aggresion Lvl6",
    aggresion: Number((-0.045 - Math.random() * 0.05).toFixed(2)),
  },
  {
    id: 7,
    value: "Aggresion Lvl7",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
  },
  {
    id: 8,
    value: "Aggresion Lvl8",
    aggresion: Number((-0.035 - Math.random() * 0.04).toFixed(2)),
  },
  {
    id: 9,
    value: "Aggresion Lvl9",
    aggresion: Number((-0.03 - Math.random() * 0.035).toFixed(2)),
  },
  {
    id: 10,
    value: "Aggresion Lvl10",
    aggresion: Number((-0.025 - Math.random() * 0.03).toFixed(2)),
  },
  {
    id: 11,
    value: "Aggresion Lvl11",
    aggresion: Number((-0.02 - Math.random() * 0.025).toFixed(2)),
  },
  {
    id: 12,
    value: "Aggresion Lvl12",
    aggresion: Number((-0.015 - Math.random() * 0.02).toFixed(2)),
  },
  {
    id: 13,
    value: "Aggresion Lvl13",
    aggresion: Number((-0.01 - Math.random() * 0.015).toFixed(2)),
  },
  {
    id: 14,
    value: "Aggresion Lvl14",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 15,
    value: "Aggresion Lvl15",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 16,
    value: "Aggresion Lvl16",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 17,
    value: "Aggresion Lvl17",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 18,
    value: "Aggresion Lvl18",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 19,
    value: "Aggresion Lvl19",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
  {
    id: 20,
    value: "Aggresion Lvl20",
    aggresion: Number((-0.0095 - Math.random() * 0.01).toFixed(2)),
  },
];

class App extends Component {
  state = {
    navButtonReset: "Reset",
    navStatus: "Items",
    navAggresivity: 0,
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

  _refreshPage() {
    console.log("Clicked");
    window.location.reload();
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //clones array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Clicked");
    window.location.reload();
  };

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleSelectedItem = (evt) => {
    this.setState({
      navAggresivity: evt,
    });
    console.log("In Parent:" + evt);
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">
            <span className="mr-1">Negotium - Aggresivity Level</span>
            <span className="badge badge-pill badge-secondary mr-5">
              {this.state.navAggresivity}
            </span>
            <span className="mr-1">Clients</span>
            <span className="badge badge-pill badge-secondary mr-5">
              {this.state.counters.filter((c) => c.value > 0).length + 1}
            </span>
          </a>
          <Dropdown
            title="Select Aggresivitiy level"
            onSelectedItem={this.handleSelectedItem}
            items={items}
          />
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn-small m-2"
          >
            Reset
          </button>
        </nav>

        <main className="container">
          {console.log(items[this.state.navAggresivity])}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            aggresion={
              items[
                this.state.navAggresivity === 0
                  ? 1
                  : Number(this.state.navAggresivity - 1)
              ].aggresion
            }
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

/*
 <Navbar
          title="Select Na level"
          onSelectedItem={this.handleSelectedItem}
          onReset={this.handleReset}
          items={items}
          onSelectedItem={this.handleSelectedItem}
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          navAggresivity={this.state.navAggresivity}
        />
*/

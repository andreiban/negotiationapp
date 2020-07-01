import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Dropdown from "./components/dropdown";
import Dropdown2 from "./components/dropdown2";

const percentages = [
  { id: 1, show: "20% default", value: 0.8 },
  { id: 2, show: "25%", value: 0.75 },
  { id: 3, show: "30%", value: 0.7 },
  { id: 4, show: "Manual", value: 1 },
];
const items = [
  {
    id: 1,
    value: "Aggression Lvl1",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-0.75 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 2,
    value: "Aggression Lvl2",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-0.75 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 3,
    value: "Aggression Lvl3",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-0.75 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 4,
    value: "Aggression Lvl4",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-0.75 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 5,
    value: "Aggression Lvl5",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-0.75 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 6,
    value: "Aggression Lvl6",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 7,
    value: "Aggression Lvl7",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 8,
    value: "Aggression Lvl8",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 9,
    value: "Aggression Lvl9",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 10,
    value: "Aggression Lvl10",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 11,
    value: "Aggression Lvl11",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 12,
    value: "Aggression Lvl12",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 13,
    value: "Aggression Lvl13",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 14,
    value: "Aggression Lvl14",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 15,
    value: "Aggression Lvl15",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 16,
    value: "Aggression Lvl16",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 17,
    value: "Aggression Lvl17",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 18,
    value: "Aggression Lvl18",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 19,
    value: "Aggression Lvl19",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 20,
    value: "Aggression Lvl20",
    aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
];

class App extends Component {
  state = {
    navButtonReset: "Reset",
    navStatus: "Items",
    navAggresivity: 0,
    selectedPercentage: 0,
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

  handleSelectedItem2 = (evt) => {
    this.setState({
      selectedPercentage: evt,
    });
    console.log("In Parent:" + evt);
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-center mt-2 pt-2 pb-2 bg-light">
          <div className="col-md-2 mb-2">
            <span className="mr-1">Negotium(V0.23)</span>
            <span className="mr-1">Clients</span>
            <span className="badge badge-pill badge-secondary mr-5">
              {this.state.counters.filter((c) => c.value > 0).length + 1}
            </span>
          </div>
          <div className="col-md-2 mb-2">
            <span className="mr-1">Aggressiveness Lvl</span>
            <span className="badge badge-pill badge-secondary mr-5">
              {this.state.navAggresivity > 0
                ? this.state.navAggresivity
                : "N/A"}
            </span>
            <span className="mr-1">Discount</span>
            <span className="d-inline badge badge-pill badge-secondary mr-5 d-inline">
              {this.state.selectedPercentage > 0
                ? percentages[this.state.selectedPercentage - 1].show
                : "20% Default"}
            </span>
          </div>
          <div className="col-md-3 mb-2">
            <Dropdown2
              title="Discount %"
              onSelectedItem={this.handleSelectedItem2}
              items={percentages}
            />
          </div>

          <div className="col-md-3 mb-2 d-inline">
            <Dropdown
              title="Aggressiveness Level"
              onSelectedItem={this.handleSelectedItem}
              items={items}
            />
          </div>
          <div className="col-md-1 mb-2 d-inline">
            <button
              onClick={this.handleReset}
              className="btn btn-primary btn-small m-2"
            >
              Reset
            </button>
          </div>
        </div>

        <main className="container">
          {console.log(items[this.state.navAggresivity])}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            selectedPercentage={
              this.state.selectedPercentage < 1
                ? 1
                : percentages[this.state.selectedPercentage - 1].value
            }
            initialSeed={
              this.state.navAggresivity < 1
                ? 0
                : items[this.state.navAggresivity - 1].initialSeed
            }
            aggSetLevel={this.state.navAggresivity}
            aggresion={
              this.state.navAggresivity < 1
                ? 0
                : items[
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

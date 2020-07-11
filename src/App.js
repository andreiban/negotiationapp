import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Dropdown from "./components/dropdown";
import Dropdown2 from "./components/dropdown2";

const cartMin = 30;
const cartMax = 150;

const percentages = [
  { id: 1, show: "Manual", value: 1 },
  { id: 2, show: "20%", value: 0.8 },
  { id: 3, show: "25%", value: 0.75 },
  { id: 4, show: "30%", value: 0.7 },
];
const items = [
  {
    id: 1,
    value: "Aggressiveness Lvl 1",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-0.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 2,
    value: "Aggressiveness Lvl 2",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-0.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 3,
    value: "Aggressiveness Lvl 3",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-0.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 4,
    value: "Aggressiveness Lvl 4",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-0.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 5,
    value: "Aggressiveness Lvl 5",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-0.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 6,
    value: "Aggressiveness Lvl 6",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 7,
    value: "Aggressiveness Lvl 7",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 8,
    value: "Aggressiveness Lvl 8",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 9,
    value: "Aggressiveness Lvl 9",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 10,
    value: "Aggressiveness Lvl 10",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-1.5 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 11,
    value: "Aggressiveness Lvl 11",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 12,
    value: "Aggressiveness Lvl 12",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 13,
    value: "Aggressiveness Lvl 13",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 14,
    value: "Aggressiveness Lvl 14",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 15,
    value: "Aggressiveness Lvl 15",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-2.25 - Math.random() * 2).toFixed(2)),
  },
  {
    id: 16,
    value: "Aggressiveness Lvl 16",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 17,
    value: "Aggressiveness Lvl 17",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 18,
    value: "Aggressiveness Lvl 18",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 19,
    value: "Aggressiveness Lvl 19",
    minValue: 0.01,
    maxValue: 0.045,
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
  {
    id: 20,
    value: "Aggressiveness Lvl 20",
    minValue: 0.04,
    maxValue: 0.045,
    initialSeed: Number((-3 - Math.random() * 3).toFixed(2)),
  },
];

class App extends Component {
  state = {
    navAggresivity: 0,
    selectedPercentage: 0,
    isAggresivitySet: false,
    isDiscountSet: false,

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

  handleSelectedAggressiveness = (evt) => {
    this.setState({
      navAggresivity: evt,
      isAggresivitySet: true,
    });
    console.log("In Parent:" + evt);
  };

  handleSelectedDiscount = (evt) => {
    this.setState({
      selectedPercentage: evt,
      isDiscountSet: true,
    });
    console.log("App - Discount set:" + evt);
  };

  render() {
    const { isAggresivitySet, isDiscountSet } = this.state;
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-center mt-2 pt-2 pb-2 bg-light">
          <div className="col-md-2 mb-2">
            <span className="mr-1">Negotium(V1.07)</span>
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
                : "N/A"}
            </span>
          </div>
          <div className="col-md-3 mb-2">
            <Dropdown2
              title="Discount %"
              onSelectedItem={this.handleSelectedDiscount}
              items={percentages}
            />
          </div>

          <div className="col-md-3 mb-2 d-inline">
            <Dropdown
              title="Aggressiveness Level"
              onSelectedItem={this.handleSelectedAggressiveness}
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
            cartMin={cartMin}
            cartMax={cartMax}
            counters={this.state.counters}
            isEnabledButton={isAggresivitySet && isDiscountSet ? true : false}
            selectedPercentage={
              this.state.selectedPercentage < 1
                ? 0
                : percentages[this.state.selectedPercentage - 1].value
            }
            aggItem={
              this.state.navAggresivity < 1
                ? 0
                : items[Number(this.state.navAggresivity - 1)]
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

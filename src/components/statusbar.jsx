import React, { Component } from "react";
import StatusStep from "./statusstep";
import { FaLastfmSquare } from "react-icons/fa";

class StatusBar extends Component {
  state = {
    barsArray: [],
  };

  constructor(props) {
    super(props);
    this.barsID = 0;
    this.Body = "";

    this.state = {
      barsArray: [],
    };
  }

  deleteEvent = (index) => {
    const copyBarsArray = Object.assign([], this.state.barsArray);
    copyBarsArray.splice(index, 1);
    this.setState({
      barsArray: copyBarsArray,
    });
  };

  setBars = (element) => {
    this.Body = element.target.value;
  };

  addBars = () => {
    this.barsID = this.barsID + 1;
    const copyBarsArray = Object.assign([], this.state.barsArray);
    copyBarsArray.push({
      id: this.barsID,
      body: this.Body,
    });
    this.setState({
      barsArray: copyBarsArray,
    });
  };

  render() {
    const { progress } = this.props;
    if (progress > this.barsID) {
      this.addBars();
      this.barsID = progress;
      console.log("id-ul", this.barsID);
    }
    return (
      <div className="container col-xs-12 d-flex justify-content-center">
        <div className="progress progress-bar-width ">
          {this.state.barsArray.map((bar, index) => {
            return (
              <StatusStep
                key={bar.id}
                id={bar.id}
                body={bar.body}
                delete={this.deleteEvent.bind(this, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default StatusBar;

/*
  <div
              className={returnClassValue(negotiationStep)}
              role="progressbar"
            >
              2
            </div>
            <div
              className={returnClassValue(negotiationStep)}
              role="progressbar"
            >
              3
            </div>
            <div
              className="mr-1 progress-bar progress-bar-success progress-width hide"
              role="progressbar"
            >
              4
            </div>
            <div
              className="mr-1 progress-bar progress-bar-success bg-warning progress-width hide"
              role="progressbar"
            >
              5
            </div>
            <div
              className="mr-1 progress-bar progress-bar-warning bg-warning progress-width hide"
              role="progressbar"
            >
              6
            </div>
            <div
              className="mr-1 progress-bar progress-bar-warning bg-warning progress-width hide"
              role="progressbar"
            >
              7
            </div>
            <div
              className="progress-bar progress-bar-danger bg-danger width progress-width"
              role="progressbar"
            >
              8
            </div>
          */

import React, { Component } from "react";
import StatusStep from "./statusstep";
import { FaLastfmSquare } from "react-icons/fa";

class StatusBar extends Component {
  state = {
    currentStep: 0,
    bars: [
      { id: 1, value: 1, hide: true },
      { id: 2, value: 2, hide: true },
      { id: 3, value: 3, hide: true },
      { id: 4, value: 4, hide: true },
      { id: 5, value: 5, hide: true },
      { id: 6, value: 6, hide: true },
      { id: 7, value: 7, hide: true },
      { id: 8, value: 8, hide: true },
    ],
  };

  render() {
    const { negotiationStep } = this.props;
    const { bars } = this.state;
    console.log(bars);
    this.setState((state) => {
      const list = state.bars.map((item, j) => {
        if (j === negotiationStep) {
          return (item.hide = false);
        } else {
          return item;
        }
      });
    });
    return (
      <div class="container d-flex ">
        <div class="progress w-50 justifiy-content-center">
          {bars.map((bar, j) =>
            j === negotiationStep ? (
              ""
            ) : (
              <StatusStep
                key={bars.id}
                number={bars.value}
                hide={bars.hide}
              ></StatusStep>
            )
          )}
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

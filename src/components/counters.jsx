import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //object destructuring
    const {
      counters,
      selectedPercentage,
      isEnabledButton,
      cartMin,
      cartMax,
      aggItem,
    } = this.props;
    console.log("incounters" + selectedPercentage);
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            cartMin={cartMin}
            cartMax={cartMax}
            isEnabledButton={isEnabledButton}
            aggItem={aggItem}
            selectedDiscount={selectedPercentage}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

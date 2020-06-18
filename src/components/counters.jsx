import React, { Component } from "react";
import Counter from "./counter";
import HeaderSection from "./header-section";

class Counters extends Component {
  render() {
    //object destructuring
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

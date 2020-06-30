import React, { Component } from "react";
import Counter from "./counter";
import HeaderSection from "./header-section";

class Counters extends Component {
  render() {
    //object destructuring
    const {
      onReset,
      aggresion,
      aggSetLevel,
      counters,
      onDelete,
      onIncrement,
      initialSeed,
    } = this.props;
    console.log("incounters" + initialSeed);
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            aggSetLevel={aggSetLevel}
            aggressionlvl={aggresion}
            initialSeed={initialSeed}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

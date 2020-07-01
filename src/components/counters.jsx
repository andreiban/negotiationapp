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
      selectedPercentage,
    } = this.props;
    console.log("incounters" + selectedPercentage);
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
            selectedPercentage={selectedPercentage}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

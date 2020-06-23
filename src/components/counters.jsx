import React, { Component } from "react";
import Counter from "./counter";
import HeaderSection from "./header-section";

class Counters extends Component {
  render() {
<<<<<<< HEAD
    //object destructuring new
    const { onReset, counters, onDelete, onIncrement } = this.props;
=======
    //object destructuring
    const { onReset, aggresion, counters, onDelete, onIncrement } = this.props;
>>>>>>> development

    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            aggressionlvl={aggresion}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";

class StatusStep extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.classDefault = "progress-bar progress-bar-success progress-width ";
  }

  render() {
    console.log(this.classValue);
    return (
      <div
        key={this.props.id}
        className={this.classDefault.concat(
          this.props.id > 7
            ? "bg-danger"
            : this.props.id > 4
            ? "bg-warning mr-1"
            : "mr-1"
        )}
        role="progressbar"
      >
        {this.props.id}
      </div>
    );
  }
}

export default StatusStep;

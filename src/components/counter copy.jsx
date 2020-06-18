import React, { Component } from "react";
import HeaderSection from "./header-section";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    disable: "disabled",
    tags: ["tag1", "tag2", "tag3"],
    imgUrl: "https://picsum.photos/200",
    textarea: {
      items: "items",
    },
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //render function for components

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <HeaderSection />
        {this.props.children}
        <h4>{this.props.counter.id}</h4>
        <img src={this.state.imgUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger bt-sm m-2"
        >
          Delete
        </button>

        {this.state.tags.length === 0 && "Please add more tags!"}
        <span>{this.renderTags()}</span>
      </React.Fragment>
    );
  }

  /*
  //event handler with binding - Solution 1
  handleIncrement() {
    console.log("Increment Clicked", this.state.count);
  }
*/

  //event handler with arrow functions - SOlution 2 (no constructor)
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  //conditional formatting
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

import React, { Component } from "react";
import HeaderSection from "./header-section";

let initialstate = {};
class Counter extends Component {
  state = {
    minimumValuePercent: 0.8,
    cartValue: Number((50 + Math.random() * 100).toFixed()),
    acceptedOffer: false,
    aggressionlvl: 0,
    cartMinValue: 0,
    isSetCartMinValue: false,
    isDeal: false,
    isGenerous: false,
    counterStep: 0,
    maxSteps: 7,
    firstOffer: 0,
    yourOffer: 0,
    ourOffer: 0,
    youSaveValue: 0,
    aggressor: {
      na0: Number((-0.1 - Math.random() * 0.5).toFixed(2)),
      na01: Number((-0.1 - Math.random() * 0.5).toFixed(2)),
      na11: Number((-0.02 - Math.random() * 0.005).toFixed(2)),
      na7: Number((-0.04 - Math.random() * 0.005).toFixed(2)),
    },
    messageCenter: {
      firstOffers: [
        "I want to meet your demands, what do you think of this price?",
        "They are good products, they are worth more than what you offer",
        "We can make a deal, but raise your offer",
        "These products are worth more, come on we can make a good deal",
      ],
      finalStage: [
        "Let's make one last effort, we're about to come to an agreement",
        "Let's not miss this chance to close the deal, how about this price?",
      ],
      lastOffer: [
        "I can't make you a better price than this.",
        "Take this chance, it's the last offer.",
      ],
      start: "Let's start",
      tryAgain: "Your offer is too low, try again",
      won: "Great, We have a deal!",
      generous: "You are too generous, but it would not be fair...",
      lost: "I am sorry, no deal reached",
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      minimumValuePercent: this.state.minimumValuePercent,
      acceptedOffer: this.state.acceptedOffer,
      cartValue: this.state.cartValue,
      isSetCartMinValue: this.state.isSetCartMinValue,
      isDeal: this.state.isDeal,
      isGenerous: this.state.isGenerous,
      cartMinValue: (
        this.state.cartValue * this.state.minimumValuePercent
      ).toFixed(2),
      counterStep: this.state.counterStep,
      youSaveValue: this.state.youSaveValue,
      maxSteps: this.state.maxSteps,
      messageCenter: this.state.messageCenter,
      aggressor: this.state.aggressor,
      ourOffer:
        Number(this.state.cartValue) +
        Number(this.state.cartValue * this.state.aggressor.na11),
    };
    initialstate = this.state;
  }
  //render function for components
  resetState = () => {
    console.log("reset");
    this.setState(initialstate);
  };

  youSaveCalculus = () => {
    this.setState({
      youSaveValue: this.state.cartValue - this.state.yourOffer,
    });
  };

  handleSubmitMinPrice = (event) => {
    event.preventDefault();
    this.setState({
      isSetCartMinValue: true,
      ourOffer:
        Number(this.state.cartValue) +
        Number(this.state.cartValue * this.state.aggressor.na11),
    });
    const data = this.state;
    console.log(data);
  };

  handleAcceptedOffer = (event) => {
    this.setState({
      acceptedOffer: true,
    });
  };

  handleSubmitCounter = (event) => {
    event.preventDefault();
    console.log("Run CounterOffer");
    if (Number(this.state.counterOffer) > Number(this.state.cartValue)) {
      console.log("in generous");
      this.setState({
        isGenerous: true,
      });
      this.setStoreMessage();
    } else if (
      Number(this.state.counterOffer) >= Number(this.state.cartMinValue)
    ) {
      console.log("is deal true");
      this.props.counter.value = this.state.counterOffer;
      this.setState({
        isDeal: true,
      });
    } else {
      this.setState({
        counterStep: this.state.counterStep + 1,
      });
      this.newOfferGenerator(this.state.counterStep);
    }
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { cartMinValue } = this.state;
    console.log("this" + this.state.firstOffer);
    return (
      <React.Fragment>
        <HeaderSection />
        <div className="jumbotron">
          <div className="row">
            <div className="col-sm">
              <h5>
                Client {this.props.counter.id}: Cart Value
                <span className="badge badge-pill badge-info ml-3 mr-5">
                  {this.state.cartValue}
                </span>
              </h5>
              <h5>
                Set Minimum Price (Hidden)
                <form onSubmit={this.handleSubmitMinPrice}>
                  <input
                    className="form-control w-25 d-inline"
                    type="number"
                    placeholder={this.state.cartMinValue}
                    step="0.01"
                    min="0"
                    max={this.state.cartValue}
                    name="cartMinValue"
                    onChange={this.handleInputChange}
                  ></input>
                  <button className="btn btn-secondary btn-sm m-2 d-inline">
                    Set
                  </button>
                </form>
              </h5>
              <div>
                <label>Our Offer:</label>
                <br></br>
                <input
                  type="number"
                  className="form-control w-25 d-inline"
                  id="ourOffer"
                  defaultValue={this.state.ourOffer}
                  value={this.state.ourOffer}
                ></input>
                <button
                  onClick={this.handleAcceptedOffer}
                  className="btn btn-success btn-sm m-2 d-inline"
                >
                  Accept Offer
                </button>
              </div>
              <label>Your Offer:</label>
              <input
                type="number"
                className="form-control w-25"
                id="yourOffer"
                defaultValue={this.state.counterOffer}
              ></input>
            </div>

            <div className="col-sm">
              <h4>
                Propose a Counter Offer: Step
                <span className="badge badge-pill badge-info ml-1 mr-5">
                  {this.state.counterStep}
                </span>
              </h4>
              <form onSubmit={this.handleSubmitCounter}>
                <div>
                  <label className="d-inline">Your Counter Offer:</label>
                  <input
                    type="number"
                    className="form-control w-25 d-inline"
                    name="counterOffer"
                    min="0"
                    max={this.state.cartValue}
                    onChange={this.handleInputChange}
                  ></input>
                  <button
                    className={this.getButtonClasses()}
                    disabled={this.getButtonDisabled()}
                  >
                    Counteroffer
                  </button>
                </div>
              </form>

              <label>
                You save:
                {!this.state.counterOffer
                  ? (
                      Number(this.state.cartValue) - Number(this.state.ourOffer)
                    ).toFixed(2)
                  : (
                      Number(this.state.cartValue) -
                      Number(this.state.counterOffer)
                    ).toFixed(2)}
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <h5>{this.setStoreMessage()}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }

  /*
  <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
           <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger bt-sm m-2"
        >
          Delete
        </button>
  //event handler with binding - Solution 1
  handleIncrement() {
    console.log("Increment Clicked", this.state.count);
  }
*/

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

  getButtonClasses() {
    let classes = "btn btn-sm m-2 d-inline ";
    classes +=
      this.state.counterStep <= this.state.maxSteps
        ? "badge-warning"
        : "badge-disabled";
    return classes;
  }

  setAcceptedOffer() {}

  getButtonDisabled() {
    return this.state.counterStep <= this.state.maxSteps ? "" : "disabled";
  }

  setStoreMessage() {
    console.log("in store message");
    if (this.state.isDeal) return this.state.messageCenter.won;
    else if (Number(this.state.counterOffer) > Number(this.state.cartValue)) {
      return this.state.messageCenter.generous;
    } else if (this.state.counterStep === 0 && !this.state.acceptedOffer)
      return this.state.messageCenter.start;
    else if (
      this.state.counterStep === Number(this.state.maxSteps - 1) &&
      !this.state.acceptedOffer
    )
      return this.state.messageCenter.finalStage[
        Math.floor(Math.random() * this.state.messageCenter.finalStage.length)
      ];
    else if (
      this.state.counterStep === Number(this.state.maxSteps) &&
      !this.state.acceptedOffer
    )
      return this.state.messageCenter.lastOffer[
        Math.floor(Math.random() * this.state.messageCenter.lastOffer.length)
      ];
    else if (
      this.state.counterStep <= this.state.maxSteps &&
      !this.state.acceptedOffer
    )
      return this.state.messageCenter.firstOffers[
        Math.floor(Math.random() * this.state.messageCenter.firstOffers.length)
      ];
    else if (
      this.state.counterStep <= this.state.maxSteps &&
      this.state.acceptedOffer
    )
      return this.state.messageCenter.won;
    else return this.state.messageCenter.lost;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  newOfferGenerator(step) {
    console.log("NewOfferGenerator" + step);

    let check =
      Number(this.state.ourOffer) +
      Number(this.state.ourOffer * this.state.aggressor.na7);

    if (step > 0 && step < 3 && Number(this.state.cartValue < 50))
      this.setState({
        ourOffer: (
          Number(this.state.ourOffer) + Number(this.state.aggressor.na0)
        ).toFixed(2),
      });
    else if (step > 0 && step < 3 && Number(this.state.cartValue > 50))
      this.setState({
        ourOffer: (
          Number(this.state.ourOffer) + Number(this.state.aggressor.na01)
        ).toFixed(2),
      });
    else if (Number(check) < Number(this.state.cartMinValue)) {
      this.setState({
        ourOffer: Number(this.state.cartMinValue),
      });
    } else {
      console.log(this.props.aggressionlvl);
      this.setState({
        ourOffer: (
          Number(this.state.ourOffer) +
          Number(this.state.ourOffer * this.props.aggressionlvl)
        ).toFixed(2),
      });
    }
  }
}

export default Counter;

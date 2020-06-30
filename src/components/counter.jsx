import React, { Component } from "react";
import HeaderSection from "./header-section";
import StatusBar from "./statusbar";
import Logo from "./logo.png";
import Hand from "./hand.gif";
import { FaUser } from "react-icons/fa";

let initialstate = {};
let valueCart = 0;
class Counter extends Component {
  state = {
    minimumValuePercent: 0.8,

    cartValue: Number((30 + Math.random() * 150).toFixed()),
    currentStoreMessage: "Let's Start!",
    acceptedOffer: false,
    aggressionlvl: 0,
    cartMinValue: 0,
    isSetCartMinValue: false,
    isDeal: false,
    isGenerous: false,
    counterStep: 0,
    nextStep: 0,
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
        "I'd like to satisfy your demands. What do you think of this price?",
        "These are good products and are worth more than your offer!",
        "We can make a deal but you need to make a higher bid!",
        "These products are worth more, come on we can make a good deal!",
      ],
      finalStage: [
        "Let's make one last effort, we're about to come to an agreement!",
        "Let's not miss this chance to close the deal, how about this price?",
      ],
      lastOffer: [
        "I can't make you a better price than this!",
        "Take this chance, it's our last offer!",
      ],
      start: "Let's start",
      tryAgain: "Your offer is too low, try again...",
      won: "Great, We have a deal!",
      generous: "You are too generous, but it would not be fair...",
      lost: "I am sorry, no deal reached",
    },
  };

  constructor(props) {
    super(props);

    const seedValue =
      this.props.aggSetLevel < 5
        ? Number((-0.75 - Math.random() * 1).toFixed(2))
        : this.props.aggSetLevel < 10
        ? Number((-1.5 - Math.random() * 1.5).toFixed(2))
        : this.props.aggSetLevel < 15
        ? Number((-2.25 - Math.random() * 2).toFixed(2))
        : Number((-3 - Math.random() * 2.5).toFixed(2));

    valueCart = this.state.cartValue;
    let temp = 0;
    this.state = {
      minimumValuePercent: this.props.selectedPercentage,
      acceptedOffer: this.state.acceptedOffer,
      cartValue: this.state.cartValue,
      isSetCartMinValue: this.state.isSetCartMinValue,
      isDeal: this.state.isDeal,
      isGenerous: this.state.isGenerous,
      cartMinValue: (
        this.state.cartValue *
        Number(
          this.props.selectedPercentage >= 1
            ? this.state.minimumValuePercent
            : this.props.selectedPercentage
        )
      ).toFixed(2),
      counterStep: this.state.counterStep,
      youSaveValue: this.state.youSaveValue,
      maxSteps: this.state.maxSteps,
      messageCenter: this.state.messageCenter,
      nextStep: this.state.nextStep,
      aggressor: this.state.aggressor,
      youSaveValue: 0,
      ourOffer:
        Number(this.state.cartValue) +
        (Number(this.state.cartValue) * seedValue) / 100,
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
    console.log(this.props.aggSetLevel);
    const seedValue =
      this.props.aggSetLevel < 5
        ? Number((-0.75 - Math.random() * 2).toFixed(2))
        : this.props.aggSetLevel < 10
        ? Number((-1.5 - Math.random() * 2).toFixed(2))
        : this.props.aggSetLevel < 15
        ? Number((-2.25 - Math.random() * 2).toFixed(2))
        : Number((-3 - Math.random() * 2).toFixed(2));
    console.log(seedValue);
    event.preventDefault();
    this.setState({
      isSetCartMinValue: true,
      ourOffer:
        this.temp > 0 ? this.temp : Number(this.state.cartValue) + seedValue,
    });
    const data = this.state;
    console.log(data);
  };

  setFirstValue() {
    const seedValue =
      this.props.aggSetLevel < 5
        ? Number((-0.75 - Math.random() * 2).toFixed(2))
        : this.props.aggSetLevel < 10
        ? Number((-1.5 - Math.random() * 2).toFixed(2))
        : this.props.aggSetLevel < 15
        ? Number((-2.25 - Math.random() * 2).toFixed(2))
        : Number((-3 - Math.random() * 2).toFixed(2));

    return seedValue;
  }

  handleAcceptedOffer = (event) => {
    this.setState({
      acceptedOffer: true,
    });
    this.setStoreMessage();
  };

  handleSubmitCounter = (event) => {
    event.preventDefault();
    console.log("Run CounterOffer" + this.state.counterOffer);
    console.log("Cart Min Value" + this.state.cartMinValue);
    this.setState({
      yourOffer: this.state.counterOffer,
      nextStep: this.state.nextStep + 1,
    });
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
      this.props.counter.value = this.state.yourOffer;
      this.setState({
        isDeal: true,
      });
      this.setStoreMessage();
    } else {
      console.log("increase step");
      this.setState({
        counterStep: this.state.counterStep + 1,
      });
      this.setStoreMessage();
      this.newOfferGenerator(this.state.counterStep);
    }
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputChange2 = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  displayFirstOffer() {
    const value = Number(this.state.cartValue + this.props.initialSeed).toFixed(
      2
    );
    this.temp = value;
    return value;
  }
  /*componentDidMount() {
    var htmlInput = document.getElementById("input-counter");
    console.log(valueCart);
    htmlInput.oninvalid = function (e) {
      e.target.setCustomValidity(
        "You are too generous, but it would not be fair..."
      );
      htmlInput.oninput = function (e) {
        e.target.setCustomValidity(" ");
      };
    };
  }
*/
  render() {
    const { cartMinValue } = this.state;
    return (
      <React.Fragment>
        <HeaderSection />
        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <FaUser className="d-inline mb-2 mr-2" />
              <h5 className="d-inline">
                Client {this.props.counter.id}: Cart Value
                <span className="badge badge-pill badge-info ml-3 mr-5">
                  {this.state.cartValue}
                </span>
              </h5>
              <h6 className=" d-inline mt-3">
                Set Minimum Price (Hidden)
                <form className="d-inline" onSubmit={this.handleSubmitMinPrice}>
                  <input
                    id="input-min-price"
                    className=" form-control w-25 d-inline"
                    type="number"
                    placeholder={this.state.cartMinValue}
                    min="1"
                    max={this.state.cartValue}
                    name="cartMinValue"
                    onChange={this.handleInputChange}
                  ></input>
                  <button className="d-inline btn btn-secondary btn-sm m-2 d-inline">
                    Set
                  </button>
                </form>
              </h6>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-2 pt-2 pb-2 bg-white">
            <div className="col-md-6 m-6">
              <h4 className="m-2">Our Offer:</h4>
              <input
                type="number"
                className="m-2 form-control w-25 d-inline"
                id="ourOffer"
                value={
                  this.props.aggressionlvl === 0
                    ? ""
                    : this.state.counterStep < 1
                    ? this.displayFirstOffer()
                    : Number(this.state.ourOffer).toFixed(2)
                }
              ></input>
              <button
                onClick={this.handleAcceptedOffer}
                className="btn btn-success btn-sm m-2 d-inline"
              >
                Accept Offer
              </button>
            </div>

            <div className="col-md-6 m-6">
              <h4 className="m-2">
                Your Counter Offer (Step
                <span className="badge badge-pill badge-info ml-1">
                  {this.state.counterStep}
                </span>
                )
              </h4>
              <form onSubmit={this.handleSubmitCounter}>
                <div>
                  <input
                    id="input-counter"
                    type="number"
                    className="m-2 form-control w-25 d-inline"
                    name="counterOffer"
                    min="0.00"
                    onChange={this.handleInputChange2}
                  ></input>
                  <button
                    className={this.getButtonClasses()}
                    disabled={
                      this.props.aggressionlvl === 0
                        ? "disabled"
                        : this.getButtonDisabled()
                    }
                  >
                    Counteroffer
                  </button>
                </div>
              </form>

              <label className="ml-2">
                *You save:
                {this.state.counterOffer == null
                  ? ""
                  : Number(
                      this.state.cartValue - this.state.counterOffer
                    ).toFixed(2)}
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-2 pt-2 pb-2 bg-white">
            <div className="col col-sm d-flex justify-content-end">
              <img src={Hand} width="120px" height="100px"></img>
            </div>
            <div className="col col-sm">
              <img src={Logo} width="100px" height="100px"></img>
            </div>
          </div>

          <div className="row d-flex justify-content-center bg-white">
            <StatusBar progress={this.state.counterStep} />
            <br></br>
            <h5 className="mb-2">
              {this.state.acceptedOffer || this.state.isDeal
                ? this.state.messageCenter.won
                : Number(this.state.yourOffer) > Number(this.state.cartValue)
                ? this.state.messageCenter.generous
                : this.state.counterStep === 0 && !this.state.acceptedOffer
                ? this.state.messageCenter.start
                : this.state.counterStep === Number(this.state.maxSteps - 1) &&
                  !this.state.acceptedOffer
                ? this.state.messageCenter.finalStage[
                    Math.floor(
                      Math.random() * this.state.messageCenter.finalStage.length
                    )
                  ]
                : this.state.counterStep <= this.state.maxSteps &&
                  !this.state.acceptedOffer
                ? this.state.messageCenter.firstOffers[
                    Math.floor(
                      Math.random() *
                        this.state.messageCenter.firstOffers.length
                    )
                  ]
                : this.state.counterStep === Number(this.state.maxSteps) &&
                  !this.state.acceptedOffer
                ? this.state.messageCenter.lastOffer[
                    Math.floor(
                      Math.random() * this.state.messageCenter.lastOffer.length
                    )
                  ]
                : this.state.counterStep <= this.state.maxSteps &&
                  !this.state.acceptedOffer
                ? this.state.messageCenter.won
                : this.state.messageCenter.lost}
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }

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

  getButtonDisabled() {
    if (this.state.counterStep <= this.state.maxSteps) {
      return "";
    }
    return "disabled";
  }

  setStoreMessage = () => {
    console.log("in store message");
    if (this.state.acceptedOffer || this.state.isDeal)
      this.setState({
        currentStoreMessage: this.state.messageCenter.won,
      });
    else if (Number(this.state.yourOffer) > Number(this.state.cartValue)) {
      this.setState({ currentStoreMessage: this.state.messageCenter.generous });
    } else if (this.state.counterStep === 0 && !this.state.acceptedOffer)
      this.setState({ currentStoreMessage: this.state.messageCenter.start });
    else if (
      this.state.counterStep === Number(this.state.maxSteps - 1) &&
      !this.state.acceptedOffer
    )
      this.setState({
        currentStoreMessage: this.state.messageCenter.finalStage[
          Math.floor(Math.random() * this.state.messageCenter.finalStage.length)
        ],
      });
    else if (
      this.state.counterStep === Number(this.state.maxSteps) &&
      !this.state.acceptedOffer
    )
      this.setState({
        currentStoreMessage: this.state.messageCenter.lastOffer[
          Math.floor(Math.random() * this.state.messageCenter.lastOffer.length)
        ],
      });
    else if (
      this.state.counterStep <= this.state.maxSteps &&
      !this.state.acceptedOffer
    )
      this.setState({
        currentStoreMessage: this.state.messageCenter.firstOffers[
          Math.floor(
            Math.random() * this.state.messageCenter.firstOffers.length
          )
        ],
      });
    else if (
      this.state.counterStep <= this.state.maxSteps &&
      this.state.acceptedOffer
    )
      this.setState({
        currentStoreMessage: this.state.messageCenter.won,
      });
    else
      this.setState({
        currentStoreMessage: this.state.messageCenter.lost,
      });
  };

  // Generate new offers
  newOfferGenerator(step) {
    console.log("NewOfferGenerator" + step);

    let check =
      Number(this.state.ourOffer) +
      Number(this.state.ourOffer * this.state.aggressor.na7);

    if (step > 0 && step < 3 && Number(this.state.cartValue < 50))
      this.setState({
        ourOffer: (
          Number(this.state.ourOffer) + Number(this.state.aggressor.na7)
        ).toFixed(2),
      });
    else if (step > 0 && step < 3 && Number(this.state.cartValue > 50))
      this.setState({
        ourOffer: (
          Number(this.state.ourOffer) + Number(this.state.aggressor.na7)
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

import React, { Component } from "react";
import StatusBar from "./statusbar";
import MessageCenter from "./messagecenter";
import Logo from "./logo.png";
import Hand from "./hand.gif";
import { FaUser } from "react-icons/fa";

class Counter extends Component {
  state = {
    cartValue: 0,
    cartMinValue: "",
    isDiscountManual: false,
    isDeal: false,
    counterStep: 0,
    ourOffer: "",
    counterOffer: "",
    youSave: "",
    maxSteps: 8,
    message: "start",
  };

  constructor(props) {
    super(props);

    let cartInputValue = 0;
    let counterOfferInputValue = 0;

    this.state = {
      cartValue: Number(
        this.props.cartMin + Math.random() * this.props.cartMax
      ).toFixed(2),
      counterStep: this.state.counterStep,
      maxSteps: this.state.maxSteps,
      isDeal: this.state.isDeal,
      message: this.state.message,
    };
  }

  componentDidMount() {
    console.log("Counter " + this.props.counter.id + " is mounted!");
    console.log(this.props.cartMin);
    if (this.props.isAggresivitySet && this.props.isDiscountSet)
      this.setState({
        isEnabledButton: true,

        cartValue: this.props.cartMin,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.selectedDiscount !== prevProps.selectedDiscount) {
      if (this.props.selectedDiscount < 1) {
        console.log("selecteddiscount" + this.props.selectedDiscount);
        this.setState({
          cartMinValue: Number(
            this.state.cartValue * this.props.selectedDiscount
          ).toFixed(2),
          isDiscountManual: false,
        });
      } else {
        console.log("selecteddiscount" + this.props.selectedDiscount);
        this.setState({ isDiscountManual: true });
      }
    }
    //generate first offer
    if (this.props.isEnabledButton != prevProps.isEnabledButton) {
      console.log("Generate first Offer" + this.props.isEnabledButton);
      console.log(
        "valoare" + this.props.aggItem.initialSeed + "" + this.state.cartValue
      );
      const temp = Number(
        Number(this.state.cartValue) + Number(this.props.aggItem.initialSeed)
      ).toFixed(2);
      this.setState({
        ourOffer: temp,
        youSave: Number(Number(this.state.cartValue) - temp).toFixed(2),
      });
    }
    //generate first offer when aggressiveness is switched - nice to have
    if (
      this.props.isEnabledButton === prevProps.isEnabledButton &&
      this.props.aggItem != prevProps.aggItem &&
      this.state.counterStep === 0
    ) {
      console.log("Generate first Offer" + this.props.isEnabledButton);
      console.log(
        "valoare" + this.props.aggItem.initialSeed + "" + this.state.cartValue
      );
      const temp = Number(
        Number(this.state.cartValue) + Number(this.props.aggItem.initialSeed)
      ).toFixed(2);
      this.setState({
        ourOffer: temp,
        youSave: Number(Number(this.state.cartValue) - temp).toFixed(2),
      });
    }
    // disable client when counterstep reaches max rounds

    if (prevState.counterStep === this.state.maxSteps - 1) {
      this.setState({ message: "lost" });
    }
  }

  handleInputChangeNoState = (event) => {
    event.preventDefault();
    this.cartInputValue = event.target.value;
  };

  handleInputCounterNoState = (event) => {
    event.preventDefault();
    this.counterOfferInputValue = event.target.value;
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmitMinValue = (event) => {
    event.preventDefault();
    this.setState({ cartMinValue: this.cartInputValue });
  };

  //handle CounterOffer + Generate New Offer + Display Messages
  handleSubmitCounterOffer = (event) => {
    event.preventDefault();
    if (Number(this.counterOfferInputValue) >= Number(this.state.cartValue)) {
      console.log("too generous");
      this.setState({ message: "generous" });
    } else if (
      Number(this.counterOfferInputValue) >= Number(this.state.cartMinValue)
    ) {
      console.log("we have a winner!");
      this.setState({ message: "won" });
      this.setState({ isDeal: true });
    } else if (
      this.state.counterStep >= 0 &&
      this.state.counterStep < this.state.maxSteps - 3
    ) {
      this.setState({ message: "firstOffers" });
    } else if (
      this.state.counterStep >= this.state.maxSteps - 3 &&
      this.state.counterStep < this.state.maxSteps - 2
    ) {
      this.setState({ message: "finalStage" });
    } else if (
      this.state.counterStep >= this.state.maxSteps - 2 &&
      this.state.counterStep < this.state.maxSteps
    ) {
      this.setState({ message: "lastOffer" });
    } else {
      console.log("Other case?");
    }

    const newStep = this.state.counterStep + 1;
    this.setState({
      counterOffer: this.counterOfferInputValue,
      counterStep: newStep,
    });
    this.GenerateNewOffer(newStep);
  };

  //Generate new offers (this is where the logic sits)
  GenerateNewOffer = (step) => {
    const { aggItem } = this.props;
    console.log("Generating new offer...");
    // aggresion: Number((-0.04 - Math.random() * 0.045).toFixed(2)),
    //  Math.random() * (max - min + 1) + min)
    /* Math.random() *
    (Number(aggItem.maxValue) -
    Number(aggItem.minValue + 1) +
    Number(aggItem.minValue));*/
    const temp =
      Math.random() * (Number(aggItem.maxValue) - Number(aggItem.minValue)) +
      Number(aggItem.minValue);
    console.log("Numerfile" + temp);
    const newOffer = Number(
      Number(this.state.ourOffer) - Number(this.state.ourOffer) * Number(temp)
    ).toFixed(2);
    console.log("New Offer" + newOffer);
    Number(newOffer) >= Number(this.state.cartMinValue)
      ? this.setState({ ourOffer: newOffer })
      : this.setState({ ourOffer: this.state.cartMinValue });
  };

  handleAcceptedOffer = () => {
    this.setState({ isDeal: true });
    console.log("Offer was accepted!");
    this.setState({ message: "won" });
  };

  //render starts here
  render() {
    const { isEnabledButton, counter, isDiscountManual, aggItem } = this.props;
    console.log("deal" + this.state.isDeal);
    return (
      <React.Fragment>
        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <FaUser className="d-inline mb-2 mr-2" />
              <h5 className="d-inline">
                Client {counter.id}: Cart Value
                <span className="badge badge-pill badge-info ml-3 mr-5">
                  {this.state.cartValue}
                </span>
              </h5>
              <h6 className=" d-inline mt-3">
                Set Minimum Price (Hidden)
                <form className="d-inline" onSubmit={this.handleSubmitMinValue}>
                  <input
                    id="input-min-price"
                    className=" form-control w-25 d-inline"
                    type="number"
                    step="0.01"
                    pattern="^\d*(\.\d{0,2})?$"
                    placeholder=""
                    defaultValue={this.state.cartMinValue}
                    min="1"
                    max={this.state.cartValue}
                    name="cartMinValue"
                    onChange={this.handleInputChangeNoState}
                  ></input>
                  <button
                    className={this.setButtonClasses("btn-primary")}
                    disabled={
                      !this.state.isDeal
                        ? isEnabledButton
                          ? Number(this.state.counterStep) <
                            Number(this.state.maxSteps)
                            ? this.state.isDiscountManual
                              ? ""
                              : this.setButtonDisabled()
                            : this.setButtonDisabled()
                          : this.setButtonDisabled()
                        : this.setButtonDisabled()
                    }
                  >
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
                className=" form-control w-25 d-inline"
                type="number"
                step="0.01"
                pattern="^\d*(\.\d{0,2})?$"
                placeholder=""
                min="1"
                max=""
                name=""
                defaultValue={this.state.ourOffer}
                disabled
              ></input>
              <button
                onClick={this.handleAcceptedOffer}
                className={this.setButtonClasses("btn-success")}
                disabled={
                  !this.state.isDeal
                    ? isEnabledButton
                      ? Number(this.state.counterStep) <
                        Number(this.state.maxSteps)
                        ? ""
                        : this.setButtonDisabled()
                      : this.setButtonDisabled()
                    : this.setButtonDisabled()
                }
              >
                Accept Offer
              </button>
            </div>

            <div className="col-md-6 m-6">
              <h4 className="m-2">
                Your CounterOffer (Step
                <span className="badge badge-pill badge-info ml-1">
                  {this.state.counterStep}
                </span>
                )
              </h4>
              <form onSubmit={this.handleSubmitCounterOffer}>
                <div>
                  <input
                    id="input-counter"
                    type="number"
                    step="0.01"
                    required="required"
                    pattern="^\d*(\.\d{0,2})?$"
                    className="m-2 form-control w-25 d-inline"
                    name="counterOffer"
                    min="0.00"
                    onChange={this.handleInputCounterNoState}
                  ></input>
                  <button
                    className={this.setButtonClasses("btn-warning")}
                    disabled={
                      !this.state.isDeal
                        ? isEnabledButton
                          ? Number(this.state.counterStep) <
                            Number(this.state.maxSteps)
                            ? ""
                            : this.setButtonDisabled()
                          : this.setButtonDisabled()
                        : this.setButtonDisabled()
                    }
                  >
                    Counteroffer
                  </button>
                </div>
              </form>

              <label className="ml-2">*You save: {this.state.youSave}</label>
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
              <MessageCenter messageType={this.state.message} />
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }

  /*Helpers*/
  //disable buttons when Aggresivity & Discount not set
  setButtonDisabled() {
    if (1 > 2) {
      return "";
    }
    return "disabled";
  }

  //
  setButtonClasses(type) {
    let classes = "btn btn-sm m-2 d-inline " + type + " ";
    return classes;
  }
}

export default Counter;

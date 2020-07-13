import React, { Component } from "react";

class MessageCenter extends Component {
  state = {
    messageCenter: {
      firstOffers: [
        "I'd like to satisfy your demands. What do you think of this price?",
        "These are good products and are worth more than your offer!",
        "We can make a deal but you need to make a higher bid!",
        "These products are worth more, come on, we can make a good deal!",
      ],
      finalStage: [
        "Let's make one last effort, we're about to come to an agreement!",
        "Let's not miss this chance to close the deal, how about this price?",
      ],
      lastOffer: [
        "I can't make you a better price than this!",
        "Take this chance, it's our last offer!",
      ],
      sameOffer: "I understand, but you need to make a different bid!",
      sameOfferLast: "I am afraid we have reached a stalemate...",
      start: "Let's start",
      tryAgain: "Your offer is too low, try again...",
      won: "Great, We have a deal!",
      generous: "You are too generous, but it would not be fair...",
      lost: "I am sorry, no deal reached",
    },
  };
  render() {
    const { messageType, youSaveFinal } = this.props;

    if (messageType === "firstOffers")
      return this.state.messageCenter.firstOffers[
        Math.floor(Math.random() * this.state.messageCenter.firstOffers.length)
      ];
    else if (messageType === "finalStage")
      return this.state.messageCenter.finalStage[
        Math.floor(Math.random() * this.state.messageCenter.finalStage.length)
      ];
    else if (messageType === "lastOffer")
      return this.state.messageCenter.lastOffer[
        Math.floor(Math.random() * this.state.messageCenter.lastOffer.length)
      ];
    else if (messageType === "start") return this.state.messageCenter.start;
    else if (messageType === "won")
      return (
        this.state.messageCenter.won +
        " You got a discount worth of " +
        youSaveFinal +
        " !"
      );
    else if (messageType === "generous")
      return this.state.messageCenter.generous;
    else if (messageType === "sameOffer")
      return this.state.messageCenter.sameOffer;
    else if (messageType === "sameOfferLast")
      return this.state.messageCenter.sameOfferLast;
    else return this.state.messageCenter.lost;
  }
}

export default MessageCenter;

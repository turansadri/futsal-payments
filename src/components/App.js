import React, { Component } from "react";
import { Match, Miss } from "react-router";
import Navigation from "./Navigation";
import DatePlayers from "./DatePlayers";
import DateSelector from "./DateSelector";
import AllPlayers from "./AllPlayers";
import Player from "./Player";
import NotFound from "./NotFound";
import base from "../base";

require("react-datepicker/dist/react-datepicker.css");

class App extends Component {
  constructor() {
    super();
    this.addPlayer = this.addPlayer.bind(this);
    this.playerAttending = this.playerAttending.bind(this);
    this.addPayment = this.addPayment.bind(this);
    this.removePayment = this.removePayment.bind(this);
    this.state = {
      players: {},
    };
  }
  componentWillMount() {
    this.ref = base.syncState("players", {
      context: this,
      state: "players",
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addPlayer(player) {
    const players = { ...this.state.players };
    // Fix this to add proper id
    const timestamp = Date.now();
    players[`player-${timestamp}`] = player;
    this.setState({ players });
  }
  addPayment(player, payment) {
    const players = { ...this.state.players };
    const payments = this.state.players[player].payments || [];
    const timestamp = Date.now();
    payments[`payment-${timestamp}`] = payment;

    // console.log(payments);
    // payments.push(payment);
    players[player].payments = payments;
    this.setState({
      players,
    });
  }
  removePayment(player, paymentKey) {
    const players = { ...this.state.players };
    players[player].payments[paymentKey] = null;
    this.setState({
      players,
    })
  }
  playerAttending(player, selectedDate) {
    /* Adds / removes selected dates to player dates array */
    /* Dates array is created if needed */
    const players = { ...this.state.players };
    const dates = this.state.players[player].dates || [];
    const attending = (dates && (dates.indexOf(selectedDate) > -1));
    if (!attending) {
      dates.push(selectedDate);
    } else {
      const index = dates.indexOf(selectedDate);
      dates.splice(index, 1);
    }
    players[player].dates = dates;
    this.setState({
      players,
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        {/* <DatePlayers
          addPlayer={this.addPlayer}
          playerAttending={this.playerAttending}
          players={this.state.players}
          selectedDate={this.props.params.selectedDate}
        /> */}
        <div className="content">
          <Match
            exactly pattern="/"
            component={defaultProps => <DateSelector {...defaultProps} />}
          />
          <Match
            exactly pattern="/dates/:selectedDate"
            component={defaultProps =>
              <DatePlayers
                {...defaultProps}
                players={this.state.players}
                playerAttending={this.playerAttending}
              />}
          />
          <Match
            exactly pattern="/players"
            component={defaultProps =>
              <AllPlayers
                {...defaultProps}
                players={this.state.players}
              />}
          />
          <Match
            exactly pattern="/player/:playerName"
            component={defaultProps =>
              <Player
                {...defaultProps}
                players={this.state.players}
                addPayment={this.addPayment}
                removePayment={this.removePayment}
              />}
          />
          <Miss component={defaultProps => <NotFound {...defaultProps} />} />
        </div>
      </div>
    );
  }
}

export default App;

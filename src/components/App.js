import React, { Component } from "react";
import Navigation from "./Navigation";
import Players from "./Players";
import base from "../base";

class App extends Component {
  constructor() {
    super();
    this.addPlayer = this.addPlayer.bind(this);
    this.playerAttending = this.playerAttending.bind(this);
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
  playerAttending(player) {
    /* Adds / removes selected dates to player dates array */
    /* Dates array is created if needed */
    const players = { ...this.state.players };
    const selectedDate = this.props.params.selectedDate;
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
        <Players
          addPlayer={this.addPlayer}
          playerAttending={this.playerAttending}
          players={this.state.players}
          selectedDate={this.props.params.selectedDate}
        />
      </div>
    );
  }
}

// App.propTypes = {
//   params: {
//     selectedDate: React.PropTypes.func,
//   },
// };
export default App;

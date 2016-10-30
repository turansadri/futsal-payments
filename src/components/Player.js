import React from "react";
import AddPaymentForm from "./AddPaymentForm";
import PlayerPaymentsList from "./PlayerPaymentsList";

class Player extends React.Component {
  render() {
    const { players, addPayment } = this.props;
    const { playerName } = this.props.params;
    if (Object.keys(players).length > 0 && players.constructor === Object) {
      return (
        <div>
          <h1>{players[playerName].name}</h1>
          <AddPaymentForm playerName={playerName} addPayment={addPayment} />
          <PlayerPaymentsList payments={players[playerName].payments} />
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

Player.propTypes = {
  players: React.PropTypes.shape({
  }),
  params: React.PropTypes.shape({
    playerName: React.PropTypes.string,
  }),
  addPayment: React.PropTypes.func,
};

export default Player;

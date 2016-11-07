import React from "react";
import AddPaymentForm from "./AddPaymentForm";
import PlayerPaymentsList from "./PlayerPaymentsList";

class Player extends React.Component {
  render() {
    const { players, addPayment, removePayment } = this.props;
    const { playerName } = this.props.params;
    if (Object.keys(players).length > 0 && players.constructor === Object) {
      console.log(players[playerName]);
      return (
        <div>
          <h1 className="tc">{players[playerName].name}</h1>
          <AddPaymentForm playerName={playerName} addPayment={addPayment} />
          <PlayerPaymentsList
            playerName={playerName}
            payments={players[playerName].payments}
            removePayment={removePayment}
          />
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
  removePayment: React.PropTypes.func,
};

export default Player;

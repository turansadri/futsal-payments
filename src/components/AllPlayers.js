import React from "react";
import classnames from "classnames";
import AddPlayerForm from "./AddPlayerForm";
import PlayerAttendanceList from "./PlayerAttendanceList";
import PlayerPaymentsList from "./PlayerPaymentsList";

class AllPlayers extends React.Component {
  render() {
    const { players, removePayment } = this.props;
    return (
      <div>
        <h1>List of players</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          { Object.keys(players).map((key) => {
            const liClass = classnames({
              ph3: true,
              pv3: true,
              bb: true,
              "b--light-silver": true,
            });
            const playerName = players[key].name;
            return (
              <li
                className={liClass}
                key={key}
              >{playerName}
                <PlayerAttendanceList
                  dates={players[key].dates}
                />
                <PlayerPaymentsList
                  playerName={playerName}
                  payments={players[key].payments}
                  removePayment={removePayment}
                />
              </li>);
          })}
        </ul>
        <AddPlayerForm addPlayer={this.props.addPlayer} />
      </div>
    );
  }
}
AllPlayers.propTypes = {
  players: React.PropTypes.shape({
  }),
  addPlayer: React.PropTypes.func,
};

export default AllPlayers;

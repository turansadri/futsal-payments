import React from "react";
import classnames from "classnames";
import AddPlayerForm from "./AddPlayerForm";

class AllPlayers extends React.Component {
  render() {
    const { players } = this.props;
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
            return (
              <li
                className={liClass}
                key={key}
              >{players[key].name}</li>);
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

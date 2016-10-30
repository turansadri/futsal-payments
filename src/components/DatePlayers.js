import React from "react";
import Link from "react-router/Link";
import classnames from "classnames";
import AddPlayerForm from "./AddPlayerForm";

class DatePlayers extends React.Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        <h1>List of players</h1>
        <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
          { Object.keys(players).map((key) => {
            const dates = players[key].dates;
            const selectedDate = this.props.params.selectedDate;
            let isAttending = "";
            if (dates && (dates.indexOf(selectedDate) > -1)) {
              isAttending = true;
            }
            const playerURL = `/player/${key}`;
            const liClass = classnames({
              ph3: true,
              pv3: true,
              bb: true,
              "b--light-silver": true,
              "bg-green": isAttending,
              white: isAttending,
            });
            return (
              <li
                className={liClass}
                key={key}
                onClick={() => this.props.playerAttending(key, selectedDate)}
              >{players[key].name}
                <Link to={playerURL}>Link</Link>
              </li>);
          })}
        </ul>
        <AddPlayerForm addPlayer={this.props.addPlayer} />
      </div>
    );
  }
}
// Players.propTypes = {
//   players: {
//     player: {
//       name: React.PropTypes.string,
//       dates: React.PropTypes.array,
//       payments: React.PropTypes.array,
//     },
//   },
//   addPlayer: React.PropTypes.func,
//   selectedDate: React.PropTypes.string,
//   playerAttending: React.PropTypes.func,
// };

export default DatePlayers;

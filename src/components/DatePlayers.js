import React from "react";
import Link from "react-router/Link";
import classnames from "classnames";
import AddPlayerForm from "./AddPlayerForm";

const moment = require("moment");

class DatePlayers extends React.Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        <h1 className="f1 lh-solid date-styled date-styled--large">
          <span className="day">{moment(this.props.params.selectedDate).format("D")}</span>
          <span className="month">{moment(this.props.params.selectedDate).format("MMMM")}</span>
          <span className="year">{moment(this.props.params.selectedDate).format("YYYY")}</span>
        </h1>
        <ul className="list pl0 ml0 center mw6 bt bb b--light-silver">
          { Object.keys(players).map((key) => {
            const dates = players[key].dates;
            const selectedDate = this.props.params.selectedDate;
            let isAttending = "";
            if (dates && (dates.indexOf(selectedDate) > -1)) {
              isAttending = true;
            }
            const playerURL = `/player/${key}`;
            const liClass = classnames({
              fw5: true,
              cf: true,
              bb: true,
              "ph2-ns": true,
              "b--light-silver": true,
              "bg-green": isAttending,
              white: isAttending,
            });
            const aClass = classnames({
              fw7: true,
              f4: true,
              db: true,
              pa2: true,
              tr: true,
              "no-underline": true,
              black: true,
              white: isAttending,
            });
            return (
              <li
                className={liClass}
                key={key}
              >
                <div className="fl w-80 pointer">
                  <div className="pa3" onClick={() => this.props.playerAttending(key, selectedDate)}>{players[key].name}</div>
                </div>
                <div className="fl w-20">
                  <Link className={aClass} to={playerURL}>&gt;</Link>
                </div>
              </li>);
          })}
        </ul>
        <AddPlayerForm addPlayer={this.props.addPlayer} />
      </div>
    );
  }
}

DatePlayers.propTypes = {
  players: React.PropTypes.shape({}),
  params: React.PropTypes.shape({
    selectedDate: React.PropTypes.string,
  }),
  addPlayer: React.PropTypes.func,
  selectedDate: React.PropTypes.string,
  playerAttending: React.PropTypes.func,
};

export default DatePlayers;

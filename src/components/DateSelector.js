import React from "react";
import Link from "react-router/Link";

const moment = require("moment");

class DateSelector extends React.Component {
  render() {
    const dates = [
      "2016-10-03",
      "2016-10-10",
      "2016-10-17",
      "2016-10-24",
      "2016-10-31",
      "2016-11-07",
      "2016-11-14",
      "2016-11-21",
      "2016-11-28",
      "2016-12-05",
      "2016-12-12",
      "2016-12-19",
      "2016-12-26",
      "2017-01-02",
      "2017-01-09",
      "2017-01-16",
      "2017-01-23",
      "2017-01-30",
      "2017-02-06",
      "2017-02-13",
      "2017-02-20",
      "2017-02-27",
      "2017-03-06",
      "2017-03-13",
      "2017-03-20",
      "2017-03-27",
      "2017-04-03",
      "2017-04-10",
      "2017-04-17",
      "2017-04-24",
    ];
    return (
      <ul className="date-selector list">
        {
          dates.map(date =>
            <li className="fl w-third pa2" key={date}>
              <Link className="date-styled" to={`/dates/${date}`}>
                <span className="day">{moment(date).format("D")}</span>
                <span className="month">{moment(date).format("MMMM")}</span>
                <span className="year">{moment(date).format("YYYY")}</span>
              </Link>
            </li>)
        }
      </ul>
    );
  }
}

export default DateSelector;

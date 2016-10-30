import React from "react";
import Link from "react-router/Link";

class DateSelector extends React.Component {
  render() {
    const dates = [
      "03-10-2016",
      "10-10-2016",
      "17-10-2016",
      "24-10-2016",
      "31-10-2016",
      "07-11-2016",
      "14-11-2016",
      "21-11-2016",
      "28-11-2016",
      "05-12-2016",
      "12-12-2016",
      "19-12-2016",
      "26-12-2016",
      "02-01-2016",
      "09-01-2016",
      "16-01-2016",
      "23-01-2016",
      "30-01-2016",
      "06-02-2016",
      "13-02-2016",
      "20-02-2016",
      "27-02-2016",
    ];
    return (
      <ul>
        {
          dates.map(key => <li key={key}><Link to={`/dates/${key}`}>{key}</Link></li>)
        }
      </ul>
    );
  }
}

export default DateSelector;

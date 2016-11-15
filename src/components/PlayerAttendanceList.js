import React from "react";

const moment = require("moment");

class PlayerAttendanceList extends React.Component {
  /* This should be moved to App to prevent multiplying code */
  displayFormattedDate(date) {
    return moment(date).format("DD.MM.YYYY");
  }
  render() {
    const { dates } = this.props;
    if (dates) {
      return (
        <div>
          <h2 className="tc">Attendance</h2>
          <table className="payment-history">
            <thead>
              <tr>
                <th className="tl">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              { dates.map(key =>
                (
                  <tr key={key}>
                    <td>
                      { this.displayFormattedDate(key) }
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>None found</div>
    );
  }
}

export default PlayerAttendanceList;

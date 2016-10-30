import React from "react";

const moment = require("moment");

class PlayerPaymentsList extends React.Component {
  displayFormattedDate(date) {
    return moment(date).format("DD.MM.YYYY");
  }
  render() {
    const { payments } = this.props;
    return (
      <div>
        <h2 className="tc">Payment history</h2>
        <table className="payment-history">
          <thead>
            <tr>
              <th className="tl">
                Date
              </th>
              <th className="tl">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(payments).map(key =>
              (
                <tr key={key}>
                  <td>
                    { this.displayFormattedDate(payments[key].date) }
                  </td>
                  <td>
                    {payments[key].amount}€
                  </td>
                </tr>
              )
            )}
          </tbody>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th className="tl">Total:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                { Object.keys(payments).map(key =>
                  payments[key].amount
                ).reduce((total, amount) =>
                  total + parseInt(amount, 10)
                , 0)}€
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// PlayerPaymentsList.propTypes = {
//   payments: React.PropTypes.shape({
//   }),
// };

export default PlayerPaymentsList;

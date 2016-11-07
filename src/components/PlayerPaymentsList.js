import React from "react";

const moment = require("moment");

class PlayerPaymentsList extends React.Component {
  constructor() {
    super();
    this.handlePaymentDelete = this.handlePaymentDelete.bind(this);
  }
  displayFormattedDate(date) {
    return moment(date).format("DD.MM.YYYY");
  }
  handlePaymentDelete(playerName, key) {
    this.props.removePayment(playerName, key);
  }
  render() {
    const { payments, playerName } = this.props;
    if (payments) {
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
                    <td>
                      <span
                        className="payment-history__delete"
                        onClick={() => this.handlePaymentDelete(playerName, key)}>Delete
                      </span>
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
    return (
      <div>None found</div>
    )
  }
}

// PlayerPaymentsList.propTypes = {
//   payments: React.PropTypes.shape({
//   }),
// };

export default PlayerPaymentsList;

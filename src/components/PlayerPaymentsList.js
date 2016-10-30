import React from "react";

class PlayerPaymentsList extends React.Component {
  render() {
    const { payments } = this.props;
    return (
      <div>
        <h2>Payment history</h2>
        <table>
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(payments).map((key) => {
              return (
                <tr key={key}>
                  <td>
                    {payments[key].date}
                  </td>
                  <td>
                    {payments[key].amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerPaymentsList;

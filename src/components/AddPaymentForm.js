import React from "react";

const moment = require("moment");
const DatePicker = require("react-datepicker");

class AddPaymentForm extends React.Component {
  constructor() {
    super();
    this.handlePayment = this.handlePayment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      startDate: moment(),
    };
  }
  handlePayment(event, playerName) {
    event.preventDefault();
    const formattedDate = moment(this.state.startDate).format();
    const payment = {
      date: formattedDate,
      amount: this.amount.value,
    };
    console.log(payment);
    this.props.addPayment(playerName, payment);
  }
  handleChange(date) {
    console.log(date);
    this.setState({
      startDate: date,
    });
  }
  render() {
    const { playerName } = this.props;
    return (
      <form className="payment-form" onSubmit={(e) => { this.handlePayment(e, playerName); }}>
        <div className="payment-form__amount">
          <input ref={(input) => { this.amount = input; }} type="text" />
          <div className="payment-form__currency">€</div>
        </div>
        <DatePicker
          dateFormat="DD.MM.YYYY"
          selected={this.state.startDate}
          onChange={this.handleChange}
          popoverAttachment="top center"
          popoverTargetAttachment="bottom center"
          popoverTargetOffset="0px 0px"
        />
        <button type="submit" className="payment-form__submit">Add payment</button>
      </form>
    );
  }
}

AddPaymentForm.propTypes = {
  playerName: React.PropTypes.string,
  addPayment: React.PropTypes.func,
};

export default AddPaymentForm;

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
    const formattedDate = moment(this.state.startDate);
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
      <form onSubmit={(e) => { this.handlePayment(e, playerName); }}>
        {this.props.playerName}
        {/* <Moment>{this.state.startDate}</Moment> */}
        <DatePicker
          dateFormat="YYYY/MM/DD"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <input ref={(input) => { this.date = input; }} type="text" placeholder="Date" />
        <input ref={(input) => { this.amount = input; }} type="text" placeholder="Amount" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AddPaymentForm.propTypes = {
  playerName: React.PropTypes.string,
  addPayment: React.PropTypes.func,
};

export default AddPaymentForm;

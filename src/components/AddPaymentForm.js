import React from "react";

class AddPaymentForm extends React.Component {
  constructor() {
    super();
    this.addPayment = this.addPayment.bind(this);
  }
  addPayment(event) {
    event.preventDefault();
    const payment = {
      date: this.date.value,
      amount: this.amount.value,
    };
    console.log(payment);
  }
  render() {
    return (
      <form onSubmit={(e) => { this.addPayment(e); }}>
        <input ref={(input) => { this.date = input; }} type="text" placeholder="Date" />
        <input ref={(input) => { this.amount = input; }} type="text" placeholder="Amount" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddPaymentForm;

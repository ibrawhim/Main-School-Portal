import React, { Component } from 'react';

class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      amount: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  payWithPaystack = () => {
    const { email, amount } = this.state;
    const handler = window.PaystackPop.setup({
      key: 'pk_test_f625ae093e8d765eca5eb1d74e74de3476c5bc66', // Replace with your public key
      email,
      amount: amount * 100, // Convert the amount to the lowest currency unit
      currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
      ref: 'YOUR_REFERENCE', // Replace with a reference you generated
      callback: (response) => {
        // This happens after the payment is completed successfully
        const reference = response.reference;
        alert('Payment complete! Reference: ' + reference);
        // Make an AJAX call to your server with the reference to verify the transaction
      },
      onClose: () => {
        alert('Transaction was not completed, window closed.');
      },
    });
    handler.openIframe();
  };

  handleSubmit = (e) => {
    e.preventDefault(h);
    // Call the Paystack payment function when the form is submitted
    this.payWithPaystack();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email-address">Email Address:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={this.state.amount}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Pay with Paystack</button>
        </form>
      </div>
    );
  }
}

export default PaymentForm;

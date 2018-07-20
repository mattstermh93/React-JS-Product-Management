import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD'

const fromUSDtoCent = amount => amount * 100;

const successPayment = data => {
  console.log(data);
  alert('Payment was successful')
}

const errorPayment = data => {
  console.log(data);
  alert('Payment error: did not work')
}

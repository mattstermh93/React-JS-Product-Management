const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
  ? 'sk_live_dUFh9MQcI5cmDa2PFp3z3KOQ'
  : 'sk_test_p16Ri1brJW1qnO6xSA20mDvN';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

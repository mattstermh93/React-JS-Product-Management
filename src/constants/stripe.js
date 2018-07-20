const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? pk_live_Np989hTYSpc4G7j8zaudYzUY
  : sk_test_p16Ri1brJW1qnO6xSA20mDvN;

export default STRIPE_PUBLISHABLE;

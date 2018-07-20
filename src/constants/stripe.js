const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_Np989hTYSpc4G7j8zaudYzUY'
  : 'pk_test_fkwFTBMg9zVbSUbUj1x7AtqA';

export default STRIPE_PUBLISHABLE;

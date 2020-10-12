// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { initMarketContract } = require('../utils/web3');
const { NotFound } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

    // initialize Market Contract
    const marketContract = await initMarketContract();

    // add Address to Protocol
    const verifyKYC = await marketContract.methods
      .verifyKYC(data._id)
      .call()
      .then(res => {
        return res;
      });

    if (verifyKYC == true) {
      console.log('Customer Found: ' + data._id);
    } else {
      new NotFound(new Error('Customer Not Found:' + data._id));
    }

    // Add new Fields
    context.data = {
      ...data // Preserve submitted data
    };

    return context;
  };
};

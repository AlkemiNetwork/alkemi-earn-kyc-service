// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { initMarketContract } = require('../utils/web3');
const { NotFound } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { id, data } = context;

    // initialize Market Contract
    const marketContract = await initMarketContract();

    // check if Customer Address is KYC verfied
    const verifyKYC = await marketContract.methods
      .verifyKYC(id)
      .call()
      .then(response => {
        return response;
      });

    if (verifyKYC) {
      console.log('Successfully Found Customer: ' + id);
    } else {
      new NotFound(new Error('Customer Not Found: ' + id));
    }

    // Add new Fields
    context.data = {
      ...data // Preserve submitted data
    };

    return context;
  };
};

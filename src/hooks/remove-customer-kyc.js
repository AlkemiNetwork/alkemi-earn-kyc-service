// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { initMarketContract } = require('../utils/web3');
const { GeneralError } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { id, data } = context;

    // initialize Market Contract
    const marketContract = await initMarketContract();

    // add Address to Protocol
    const removeCustomerKYC = await marketContract.methods
      .removeCustomerKYC(id)
      .send()
      .on('error', function(error) {
        new GeneralError(new Error('Customer Not Removed: ' + id, error));
      })
      .then(receipt => {
        console.log(receipt);
        return receipt;
      });

    if (removeCustomerKYC) {
      console.log('Successfully Removed Customer: ' + id);
    }

    // Add new Fields
    context.data = {
      ...data // Preserve submitted data
    };

    return context;
  };
};

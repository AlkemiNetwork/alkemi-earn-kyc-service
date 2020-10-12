// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { initMarketContract } = require('../utils/web3');
const { GeneralError } = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

    // initialize Market Contract
    const marketContract = await initMarketContract();

    // add Address to Protocol
    const addCustomerKYC = await marketContract.methods
      .addCustomerKYC(data._id)
      .send()
      .on('error', function(error) {
        new GeneralError(new Error('Customer Not Added: ' + data._id, error));
      })
      .then(receipt => {
        console.log(receipt);
        return receipt;
      });

    if (addCustomerKYC) {
      console.log('Successfully Added Customer: ' + data._id);
    }

    context.data = {
      ...data // Preserve submitted data
    };

    return context;
  };
};

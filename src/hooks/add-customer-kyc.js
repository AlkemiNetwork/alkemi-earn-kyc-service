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
      .then(res => {
        console.log(res);
        return res;
      });

    if (addCustomerKYC == 0) {
      console.log('Successfully Added Customer: ' + data._id);
    } else {
      new GeneralError(new Error('Customer Not Added: ' + data._id));
    }

    // Add new Fields
    context.data = {
      ...data // Preserve submitted data
    };

    return context;
  };
};

const { authenticate } = require('@feathersjs/authentication').hooks;

const addCustomerKyc = require('../../hooks/add-customer-kyc');

const removeCustomerKyc = require('../../hooks/remove-customer-kyc');

const verifyKyc = require('../../hooks/verify-kyc');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [verifyKyc()],
    create: [addCustomerKyc()],
    update: [],
    patch: [],
    remove: [removeCustomerKyc()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

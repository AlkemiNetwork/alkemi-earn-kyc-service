const Web3 = require('web3');

const logger = require('../logger');
const { contracts } = require('../constants/address_map');
const mMarketAbi = require('../abi/mMarket.json');

const { provider } = require('./provider');
const web3 = new Web3(provider);

const network = process.env.NETWORK;

// Creates an account object from a private key.
const account = web3.eth.accounts.privateKeyToAccount(
  process.env.WALLET_PRIVATE_KEY
);

exports.initMarketContract = async () => {
  const marketContract = new web3.eth.Contract(
    mMarketAbi,
    contracts[network].MMARKET,
    {
      from: account.address // default from address
    }
  );
  if (marketContract.error) {
    if (marketContract.code == 429) {
      logger.error('Infura Ratelimit', marketContract.error.message);
    } else {
      logger.error('Market Contract Error', marketContract.error.message);
    }
  }
  return marketContract;
};

exports.getTxReceipt = async hash => {
  const receipt = web3.eth.getTransactionReceipt(hash);
  if (receipt.error) {
    if (receipt.code == 429) {
      logger.error('Infura Ratelimit', receipt.error.message);
    } else {
      logger.error('Transaction Error', receipt.error.message);
    }
  }
  return receipt;
};

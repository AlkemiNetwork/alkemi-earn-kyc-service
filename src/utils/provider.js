const PrivateKeyProvider = require('truffle-privatekey-provider');

const provider = new PrivateKeyProvider(
  process.env.WALLET_PRIVATE_KEY,
  'https://:' +
    process.env.INFURA_SECRET +
    '@' +
    process.env.NETWORK +
    '.infura.io/v3/' +
    process.env.INFURA_ID
);

module.exports = { provider };

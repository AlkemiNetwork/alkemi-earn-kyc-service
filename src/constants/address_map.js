// constants
exports.contracts = {
  rinkeby: {
    MMARKET: '0xe6a53f96ceca750ef8589c5b376872213aa4f230'
  },
  kovan: {
    MMARKET: '0xb4ea11c7d3ff80384209f105c0e430ec01371f20'
  },
  ropsten: {
    MMARKET: '0xcE466383e526C7c77C869631f94181076A8Bd4Bb'
  }
};

exports.topics = {
  Deposit: '0x4ea5606ff36959d6c1a24f693661d800a98dd80c0fb8469a665d2ec7e8313c21',
  Withdraw:
    '0x56559a17e3aa8ea4b05036eaf31aeaf9fb71fc1b8865b6389647639940bed030',
  Borrow: '0x6b69190ebbb96f162b04dc222ef96416f9dca9a415b6dd183c79424501113e18',
  Repay: '0x550e7e464126359c6adc43831f011682856b177df6c49c0af6675dd2a063649d',
  Liquidate:
    '0x0938b1e79e1fd5816573487e5bd6a1e1329ec26f94f401a7b49d4b71d479657a',
  NewPendingAdmin:
    '0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9',
  NewAdmin:
    '0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc',
  NewOracle:
    '0x08763b8c90c5db415d7b7f0e18ec87eda82e24e52e2ea8135d44e17db46d85bb',
  SupportedMarket:
    '0xb7a6a26f7de915e2ae44a232d6e630a10f686ae27227d2544238ade533117b7a',
  NewRiskParameters:
    '0x1f77882929f3fe7461ce3dc42e93ec44215d80313ef2e688d3716e3f29b6552f',
  NewOriginationFee:
    '0xddf0479a07b0178bbfb5faf3e59335c0824cba499a638f0a4c9909596721ae9c',
  SetMarketInterestRateModel:
    '0xd3993418771a1083a564315767fe24b893cd870e40b00ed1866f7aee2847426d',
  EquityWithdrawn:
    '0xcb9f0cda23d6b563fc8e14d8fdada71d2ab7dadccc2e26dc353bf20ea8c5b852',
  SuspendedMarket: '',
  SetPaused: '',
  Failure: '0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0',
  PricePosted:
    '0xdd71a1d19fcba687442a1d5c58578f1e409af71a79d10fd95a4d66efd8fa9ae7'
};

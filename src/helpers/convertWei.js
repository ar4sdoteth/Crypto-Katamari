const weiToEthUsd = (wei, usdBool) => {
  const usd = 1808.3
  const eth = wei * 0.000000000000000001;
  return usdBool ? `$${(eth * usd).toFixed(2)}` : `${eth.toFixed(3)}`;
};

module.exports = { weiToEthUsd };
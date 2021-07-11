var ChainlinkPriceFeed = artifacts.require(
  "../build/contracts/ChainlinkPriceFeed.sol"
);

module.exports = function (deployer) {
  deployer.deploy(ChainlinkPriceFeed);
};

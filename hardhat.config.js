require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.28", // Версия для твоих токенов
      },
      {
        version: "0.8.28", // Версия для стандартного Lock.sol
      }
    ],
  }
};
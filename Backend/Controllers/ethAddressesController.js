const { Web3 } = require("web3");

const ethAddressesController = {
  ethAddressesData: (req, res) => {
    const web3 = new Web3("http://127.0.0.1:8545/");
    web3.eth.net
      .isListening()
      .then(() => console.log("Connected to Ethereum node"))
      .catch((err) => console.error("Error connecting to Ethereum node:", err));

    web3.eth
      .getAccounts()
      .then((accounts) => {
        console.log("All Ethereum accounts:", accounts);
        res.status(200).send({
          message: "success",
          data: { WalletAddresses: accounts },
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "fail",
          data: `Error fetching accounts:${err}`,
        });
      });
  },
};
module.exports = ethAddressesController;

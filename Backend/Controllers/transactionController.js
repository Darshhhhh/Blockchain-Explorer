const Receipt = require("../Schemas/Receipts");

const transactionController = {
  transactionHistory: async (req, res) => {
    //List of Tranaction send this to Frontends
    const data = await Receipt.find({});
    if (data) {
      return res.status(200).send({
        success: true,
        data: data,
      });
    } else {
      return res.status(500).send({
        success: false,
        message: "Error occured Fetching Data",
      });
    }
  },

  transactionReceipt: async (req, res) => {
    //Save the Tranaction Reciept to DB
    try {
      const { hash, blockHash, blockNumber, from, to, gasUsed, status } =
        req.body;
      const value = req.params.amount;

      console.log(value);
      const NewTranactionReceipt = await Receipt.create({
        hash: hash,
        blockHash: blockHash,
        blockNumber: blockNumber,
        from: from,
        to: to,
        value: value,
        gas: gasUsed,
        status: status,
      });
      if (NewTranactionReceipt) {
        return res.status(201).send({
          success: true,
          message: "Tranasction Saved Successfull!",
          data: NewTranactionReceipt,
        });
      } else {
        return res.status(500).send({
          success: false,
          message: "Error occured while Saving the Transaction a user!",
        });
      }
    } catch {
      res.status(500).send({
        success: false,
        message: "Servers Are Busy Try Again After Some Time!",
      });
    }
  },
};

module.exports = transactionController;

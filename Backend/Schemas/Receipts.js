const mongoose = require("mongoose");
const receiptsSchema = new mongoose.Schema(
  {
    hash: String,
    blockHash: String,
    blockNumber: String,
    from: String,
    to: String,
    value: String,
    gas: String,
    status: String,
  },
  {
    timestamps: true,
  }
);
const Receipt = mongoose.model("User", receiptsSchema);
module.exports = Receipt;

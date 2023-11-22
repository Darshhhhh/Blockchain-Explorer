const express = require("express");
const transactionController = require("../Controllers/transactionController");
const transactionRouter = express.Router();

transactionRouter.get("/history", transactionController.transactionHistory);

transactionRouter.post(
  "/receipt/amount=:amount",
  transactionController.transactionReceipt
);
module.exports = transactionRouter;

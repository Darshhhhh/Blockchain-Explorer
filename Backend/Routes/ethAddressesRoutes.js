const express = require("express");
const ethAddressesRouter = express.Router();
const ethAddressesController = require("../Controllers/ethAddressesController");

ethAddressesRouter.get(
  "/accounts",
  ethAddressesController.ethAddressesData
);
module.exports = ethAddressesRouter;

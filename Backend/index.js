const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const ethAddressesRouter = require("./Routes/ethAddressesRoutes");
const connection = require("./config/DBConnection");
const transactionRouter = require("./Routes/tranactionRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/addresses", ethAddressesRouter);
app.use("/api/tranaction", transactionRouter);

app.get("/", (req, res) => {
  res.send("Deployeddd!");
});

app.listen(PORT, () => {
  connection();
  console.log(`Server is Running on ${PORT}!`);
});

import { useState } from "react";
import Header from "../Header/Header";
import { useLocation, useParams } from "react-router-dom";
import Receipt from "./Receipt";
import { ethers } from "ethers";
import { GlobalConstants } from "../../../Utils/GlobalConsts";
import axios from "axios";

function Payment() {
  const Params = useParams();
  const location = useLocation();
  const { state } = location;

  const [TranactionStatus, setTranactionStatus] = useState("NotTriggerd");
  const [Amount, setAmount] = useState("");
  const [TransactionHash, setTransactionHash] = useState("");
  const [TransactionBlockHash, setTransactionBlockHash] = useState("");
  const [TransactionGas, setTransactionGas] = useState("");
  const [TransactionBlockNumber, setTransactionBlockNumber] = useState("");
  const SendTransaction = async () => {
    if (Amount === "") {
      alert("Please Add Amount First!");
      return;
    }
    try {
      // Connect to the local Hardhat network
      setTranactionStatus("loading");
      const provider = new ethers.getDefaultProvider("http://localhost:8545/");
      const privateKey =
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
      const wallet = new ethers.Wallet(privateKey, provider);

      const toAddress = Params?.sendTo;
      const ETHvalue = ethers.parseEther(Amount);
      const transaction = {
        to: toAddress,
        value: ETHvalue,
      };
      const sentTransaction = await wallet.sendTransaction(transaction);

      const transactionReceipt = await provider.waitForTransaction(
        sentTransaction.hash
      );
      setTransactionHash(sentTransaction.hash);
      setTransactionBlockHash(sentTransaction.blockHash);
      setTransactionGas(sentTransaction.gasUsed);
      setTransactionBlockNumber(sentTransaction.blockNumber);
      var api_url =
        GlobalConstants.APIdomain + `tranaction/receipt/amount=${Amount}`;
      axios
        .post(api_url, transactionReceipt)
        .then((resposne) => {
          if (resposne.status === 201) {
            alert("Transaction Sent Successfully!");
            setTranactionStatus("completed");
          }
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      setTranactionStatus("error");
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center flex-col rounded-lg  p-12 text-xl gap-5">
        <div className=" bg-purple-300 p-10 flex flex-col gap-5 rounded-xl">
          <h1>From:- {state?.OwnerAddress}</h1>
          <h1>To:- {Params?.sendTo} </h1>
          <h1>Amount:- </h1>
          <input
            className="p-2 rounded-sm"
            placeholder="Enter the amount..!!"
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
          <button
            onClick={() => SendTransaction()}
            disabled={
              TranactionStatus === "completed" || TranactionStatus === "error"
                ? true
                : false
            }
            className={
              TranactionStatus !== "completed" || TranactionStatus !== "error"
                ? "bg-white my-5 p-2 rounded-lg hover:bg-green-500 hover:text-white"
                : "bg-gray-500  my-5 p-2 rounded-lg text-white"
            }
          >
            {TranactionStatus === "completed" || TranactionStatus === "error"
              ? "Transaction is Sent"
              : "Send Now!"}
          </button>
        </div>
      </div>
      {TranactionStatus === "completed" && (
        <Receipt
          amountToSend={Amount}
          from={state?.OwnerAddress}
          to={Params?.sendTo}
          hash={TransactionHash}
          blockHash={TransactionBlockHash}
          gas={TransactionGas}
          blockNumber={TransactionBlockNumber}
        />
      )}
      {TranactionStatus === "loading" && "Loading..."}
      {TranactionStatus === "error" &&
        "Error While Sending your Transaction! Sorry..."}
    </>
  );
}

export default Payment;

import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { GlobalConstants } from "../../../Utils/GlobalConsts";
import axios from "axios";

function Transaction() {
  const [TransactionHistory, setTransactionHistory] = useState([]);
  useEffect(() => {
    const API_URL = GlobalConstants.APIdomain + "tranaction/history";
    let headerConfig = {
      headers: {
        accept: "application/json",
      },
    };
    axios
      .get(API_URL, headerConfig)
      .then((response) => {
        var serverResponse = response.data.data;
        if (response.status === 200) {
          setTransactionHistory(serverResponse);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const OpenAccrodian = (id, clicked) => {
    if (
      document.getElementById(`clicked${id}`) ===
      document.getElementById(clicked)
    ) {
      if (document.getElementById(id).style.display === "block") {
        document.getElementById(id).style.display = "none";
      } else {
        document.getElementById(id).style.display = "block";
      }
    } else {
      document.getElementById(id).style.display = "none";
    }
  };

  return (
    <>
      <Header />
      <center>
        <h1 className="text-2xl font-bold">Transaction History</h1>
      </center>
      <div className="flex flex-col flex-wrap items-center justify-start px-16 mt-10">
        {TransactionHistory?.map((Data, idx) => {
          return (
            <>
              <div
                className={
                  Data.status === "1"
                    ? "flex justify-between my-5 gap-10 w-max p-10 bg-green-500 rounded-lg"
                    : "flex justify-between my-5 gap-10 w-max p-10 bg-red-300 rounded-lg"
                }
                key={idx}
              >
                <div>
                  <h1>From : {Data.from}</h1>
                  <h1>To : {Data.to}</h1>
                  <h1>Amount : {Data.value} ETH</h1>
                </div>
                <button onClick={() => OpenAccrodian(idx, `clicked${idx}`)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
              <div id={idx} className="hidden">
                <div className="flex justify-center items-center flex-col">
                  <div
                    className={
                      Data.status === "1"
                        ? "bg-emerald-400 p-10 flex flex-col gap-5 rounded-xl font-medium"
                        : "bg-red-400 p-10 flex flex-col gap-5 rounded-xl font-medium"
                    }
                  >
                    <center>
                      <h1 className="text-2xl font-semibold">
                        Tranaction is{" "}
                        {Data.status === "1" ? "Done!🎉" : "Failed!💀"}
                      </h1>
                    </center>
                    <h1>Tranaction Hash :{Data?.hash}</h1>
                    <h1>Block Number:{Data?.blockNumber}</h1>
                    <h1>Block Hash:{Data?.blockHash}</h1>
                    <h1>
                      Status :{Data?.status === "1" ? " Success" : " Failed"}
                    </h1>
                    <h1>TimeStamp :{Data?.createdAt} </h1>
                    <h1>From🚀 : {Data?.from}</h1>
                    <h1>To🐱: {Data?.to}</h1>
                    <h1>Amount💵: {Data?.value} ETH</h1>
                    {Data?.status === "1" ? (
                      <h1>Gas🔥: {Data.gas} Gwei</h1>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Transaction;

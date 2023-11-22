import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Web3 from "web3";
import { GlobalConstants } from "../../../Utils/GlobalConsts";

function Wallet() {
  const [account, setAccount] = useState(null);
  const [Balance, setBalance] = useState("");

  const web3 = new Web3(GlobalConstants.blockchainDomain);

  useEffect(() => {
    web3.eth.net
      .isListening()
      .then(() => {
        console.log("Connected to Ethereum node");
        web3.eth
          .getAccounts()
          .then((accounts) => {
            setAccount(accounts[0]);
            web3.eth
              .getBalance(accounts[0])
              .then(function (balance) {
                setBalance(web3.utils.fromWei(balance, "ether"));
              })
              .catch(function (error) {
                console.error("Error getting balance:", error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((err) => console.error("Error connecting to Ethereum node:", err));
  }, []);

  //In case if Balance is not Fecthed click Button to Exictue this function💀💀
  const fetchBalance = () => {
    if (web3 && account) {
      web3.eth
        .getBalance(account)
        .then((balance) => {
          const etherBalance = web3.utils.fromWei(balance, "ether");
          console.log(`Balance: ${etherBalance} ETH`);
          setBalance(etherBalance);
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
        });
    }
  };
  return (
    <>
      <Header />
      <center>
        <div className="flex flex-col justify-center items-center text-3xl mt-20 gap-5">
          {account ? (
            <>
              <p>Connected Account</p>
              <span /> {account} <span />
              <p>{Balance === "" ? "" : `Your Balance is ${Balance} ETH`}</p>
              {Balance !== "" ? (
                ""
              ) : (
                <button
                  onClick={fetchBalance}
                  className="bg-purple-500 text-white px-5 py-3 rounded-md text-xl mt-10"
                >
                  Fetch Balance
                </button>
              )}
            </>
          ) : (
            <p>Connect to Hardhat Please!!</p>
          )}
        </div>
      </center>
    </>
  );
}

export default Wallet;

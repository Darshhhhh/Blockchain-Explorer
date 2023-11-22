import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { GlobalConstants } from "../../../Utils/GlobalConsts";

function Addresses() {
  const [ListOfWalletAddress, setListOfWalletAddress] = useState([]);
  const ListToRender = ListOfWalletAddress.slice(1);
  useEffect(() => {
    const API_URL = GlobalConstants.APIdomain + "addresses/accounts";
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
          setListOfWalletAddress(serverResponse.WalletAddresses);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header />
      <center>
        <h1 className="text-3xl mt-14 font-bold mb-3">
          Choose Wallet Addresses to Send ETH
        </h1>
        <span className="text-purple-500 font-bold">
          Your Wallet : {ListOfWalletAddress[0]}
        </span>
      </center>
      <div className="p-10 mt-5 flex justify-center flex-col items-center gap-5 text-base font-semibold">
        {ListToRender?.map((address, idx) => {
          return (
            <Link
              state={{ OwnerAddress: ListOfWalletAddress[0] }}
              to={`/payment/${address}`}
              key={idx}
            >
              <div className="linkSty" key={idx}>
                {address}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Addresses;

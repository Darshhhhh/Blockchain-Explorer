import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center my-5 px-20">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-14" />
      </Link>
      <div className="flex gap-10 justify-center items-center text-xl font-medium ">
        <Link to={"/transaction"}>
          <h1 className="linkSty">Transaction</h1>
        </Link>
        <Link to={"/addresses"}>
          <h1 className="linkSty">Addresses</h1>
        </Link>
        <Link to={"/my-wallet"}>
          <h1 className="linkSty">My Wallet</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;

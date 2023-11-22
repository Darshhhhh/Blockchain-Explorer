import Addresses from "./Components/Addresses/Addresses";
import Home from "./Components/Home/Home";
import Transaction from "./Components/Tranaction/Transaction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from "./Components/Wallet/Wallet";
import Payment from "./Components/Payment/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/my-wallet" element={<Wallet />} />
          <Route path="/payment/:sendTo" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

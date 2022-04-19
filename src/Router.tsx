import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./components/Coin";
import Coins from "./routes/Coins";
import Chart from "./components/Chart";
import Price from "./components/Price";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

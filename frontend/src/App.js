import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Payment from "./Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentSuccess" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

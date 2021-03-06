import React from "react";
import Home from "../home/Home";

import { Routes, Route } from "react-router-dom";
import Details from "../details/Details";
import Cart from "../cartPage/Cart";
import Payment from "../paymentPage/Payment";
import Main from "../mainpage/Main";

export default function MyRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>;
        <Route path="/home" element={<Home />}></Route>;
        <Route path="/details" element={<Details />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

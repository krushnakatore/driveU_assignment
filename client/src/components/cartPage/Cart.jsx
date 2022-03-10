import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartProduct from "../cartproduct/Cartproduct";
import Navbar from "../navbar/Navbar";
import "./cart.css";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  console.log(cartProducts);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("shopcart")));
  }, []);

  const handleDelete = (data) => {
    let cart = JSON.parse(localStorage.getItem("shopcart"));
    let newCart = cart.filter((e) => e._id !== data._id);
    localStorage.setItem("shopcart", JSON.stringify(newCart));
    setCartProducts(JSON.parse(localStorage.getItem("shopcart")));
  };
  return (
    <div>
      <Navbar />
      <div className="cart">
        {cartProducts === null ? (
          <div className="heading">Your Cart</div>
        ) : (
          <div>
            <div className="heading">Your Cart</div>
            <div className="container">
              {cartProducts.map((e) => (
                <CartProduct
                  key={e.id}
                  product={e}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="btnDiv">
        <Link to={"/payment"} className="checkOutBtn">
          Checkout
        </Link>
      </div>
    </div>
  );
}

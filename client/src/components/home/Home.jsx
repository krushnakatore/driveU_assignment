import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Navbar from "../navbar/Navbar";
import "./home.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [num, setNum] = useState(1);

  let city = JSON.parse(localStorage.getItem("location"));

  const handleAdd = (data) => {
    if (localStorage.getItem("shopcart") === null) {
      localStorage.setItem("shopcart", JSON.stringify([]));
    }

    let cart = JSON.parse(localStorage.getItem("shopcart"));
    cart.push(data);
    localStorage.setItem("shopcart", JSON.stringify(cart));
  };
  const handleRate = async () => {
    await fetch(`http://localhost:8888/shop/rate?page=${num}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };
  const handleRadius = async () => {
    await fetch(`http://localhost:8888/shop/radius?page=${num}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  const handlePayments = async () => {
    await fetch(`http://localhost:8888/shop/online?page=${num}?limit=${4}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  const handleDiscount = async () => {
    await fetch(`http://localhost:8888/shop/discount?page=${num}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(async () => {
    await fetch(`http://localhost:8888/shop?page=${num}`)
      .then((res) => res.json())
      .then((d) => setData(d));
    setName(city[city.length - 1]);
  }, [num]);

  const handleMinusPage = () => {
    setNum(num - 1);
  };
  const handleAddPage = () => {
    setNum(num + 1);
  };
  // let cart = JSON.parse(localStorage.getItem("location"));
  // setName(cart[cart.length - 1]);
  //

  console.log(name);

  return (
    <div>
      <Navbar />
      <div>
        <div className="buttons">
          <Button onClick={handleRate}>sort by ratings</Button>
          <Button onClick={handleRadius}>filter by radius</Button>
          <Button onClick={handlePayments}>filter by online Payments</Button>
          <Button onClick={handleDiscount}>sort by Discount</Button>
          <div>
            <h1 style={{ color: "white" }}>Welcome to {name}</h1>
          </div>
        </div>
      </div>
      <div className="homepage">
        {data.map((e) => {
          return (
            <div key={e._id} className="product">
              <div>
                <img className="img" src={e.images[0]} alt="demo" />
              </div>
              <div>
                <h2 style={{ color: "white" }}>{e.shop_name}</h2>
              </div>
              <div>Ratings : {e.ratings}</div>
              <div>{e.location}</div>
              <div>{e.discounts}%</div>
              <Button onClick={() => handleAdd(e)}>Add to Cart</Button>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "200px", paddingBottom: "50px" }}>
        <Button disabled={num === 0} onClick={handleMinusPage}>
          prev
        </Button>
        <Button disabled={num == 3} onClick={handleAddPage}>
          next
        </Button>
      </div>
    </div>
  );
}

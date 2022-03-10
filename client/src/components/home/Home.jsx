import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Navbar from "../navbar/Navbar";
import "./home.css";

export default function Home() {
  const [data, setData] = useState([]);
  const handleAdd = () => {};
  const handleRate = async () => {
    await fetch("http://localhost:8888/shop/rate")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };
  const handleRadius = async () => {
    await fetch("http://localhost:8888/shop/radius")
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  const handlePayments = async () => {
    await fetch("http://localhost:8888/shop/online")
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  const handleDiscount = async () => {
    await fetch("http://localhost:8888/shop/discount")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(async () => {
    await fetch("http://localhost:8888/shop")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <Button onClick={handleRate}>sort by ratings</Button>
          <Button onClick={handleRadius}>filter by radius</Button>
          <Button onClick={handlePayments}>filter by online Payments</Button>
          <Button onClick={handleDiscount}>sort by Discount</Button>
        </div>
      </div>
      <div className="homepage">
        {data.map((e) => {
          return (
            <div key={e._id}>
              <div>
                <img className="img" src={e.images[0]} alt="demo" />
              </div>
              <div>{e.shop_name}</div>
              <div>Ratings : {e.ratings}</div>
              <div>{e.location}</div>
              <div>{e.discounts}%</div>
              <Button onClick={handleAdd}>button</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

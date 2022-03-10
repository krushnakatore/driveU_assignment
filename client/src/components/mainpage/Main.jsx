import { Button } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./main.css";

export default function Main() {
  const [t, setT] = useState("");
  const [name, setName] = useState("");
  const [carts, setCart] = useState([]);
  const [flag, setFlag] = useState(true);

  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  };
  useEffect(() => {
    // localStorage.setItem("location", JSON.stringify([]));

    if (localStorage.getItem("location") === null) {
      localStorage.setItem("location", JSON.stringify([]));
    }

    var locate = JSON.parse(localStorage.getItem("location"));
    if (t !== "") {
      locate.push(t);
    }
    localStorage.setItem("location", JSON.stringify(locate));
  }, [t]);

  const handleSubmit = () => {
    setT(name);
  };

  let city = JSON.parse(localStorage.getItem("location"));

  //   if (city) {
  //     return <Navigate to="/home" />;
  //   }

  return (
    <div className="main">
      <div>
        <label>
          <h1 style={{ color: "white" }}>Enter Your Location</h1>
        </label>
        <br />

        <Input
          style={{ width: "60%" }}
          placeholder="Enter"
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <Button onClick={handleSubmit}>Submit</Button>
        <div style={{ color: "white" }}>
          {" "}
          <h1>Welcome to Drive Fittings</h1>
        </div>
        <Link to="/home">
          <Button>Go to Home Page</Button>
        </Link>
      </div>
    </div>
  );
}

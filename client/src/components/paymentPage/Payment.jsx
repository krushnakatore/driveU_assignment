import React from "react";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./payment.css";
import Input from "antd/lib/input/Input";
import { Button } from "antd/lib/radio";

export default function Payment() {
  const [status, setStatus] = useState(false);
  const [flag, setFlag] = useState(false);

  let nameValue;
  let emailValue;
  let phoneValue;
  let addressValue;

  const handleName = (e) => {
    nameValue = e.target.value;
  };

  const handleEmail = (e) => {
    emailValue = e.target.value;
  };

  const handlePhNo = (e) => {
    phoneValue = e.target.value;
  };

  const handleAddress = (e) => {
    addressValue = e.target.value;
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (nameValue.length < 3 || nameValue.length === 0) {
      alert("Enter Valid name");
    } else if (
      !emailValue.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("Enter Valid email address");
    } else if (phoneValue.length !== 10) {
      alert("Enter Valid phone number");
    } else if (addressValue.length < 10) {
      alert("Enter Valid address");
    } else {
      console.log("Navigate");
      setStatus(true);
    }
  };

  const handleSubmit = () => {
    window.alert("Thank you Visit Again!");
    setFlag(true);
  };

  if (flag) return <Navigate to="/" />;

  return (
    <div>
      <Navbar />

      <div>
        <div className="checkOutHeading">Enter Checkout details</div>
        <form onSubmit={handleClick}>
          <label>Enter Name</label>
          <Input onChange={handleName} type="text" />
          <label>Enter Email id</label>
          <Input onChange={handleEmail} type="text" />
          <label>Enter Phone no</label>
          <Input onChange={handlePhNo} type="number" />
          <label>Enter Address</label>
          <Input onChange={handleAddress} type="text" />
          <Button onClick={handleSubmit} className="checkOutButton">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

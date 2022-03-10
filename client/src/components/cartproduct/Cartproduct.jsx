import { Button } from "antd/lib/radio";
import React from "react";
import "./cartproduct.css";

export default function CartProduct({ product, handleDelete }) {
  const addToWishlist = (data) => {
    if (localStorage.getItem("WishList") === null) {
      localStorage.setItem("WishList", JSON.stringify([]));
    }

    let wishlistPro = JSON.parse(localStorage.getItem("WishList"));
    wishlistPro.push(data);
    localStorage.setItem("WishList", JSON.stringify(wishlistPro));
  };

  return (
    <div className="productCard">
      <div>
        <div>
          <img className="img" src={product.images[0]} alt="product" />
        </div>
        <div>
          <div>{product.shop_name}</div>
          <div>{product.ratings}</div>
        </div>
        <div>
          <Button onClick={() => addToWishlist(product)}>
            Add to Wishlist
          </Button>
          <Button onClick={() => handleDelete(product)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { category, name, img, stock, price } = props.shopItems;
  return (
    <div className="product">
      <img src={img} alt="pimg" />
      <div className="product-dtails">
        <h2> category: {category}</h2>
        <h3> product name: {name}</h3>
        <b>stock:{stock}</b>
        <p>
          {" "}
          <u>price:{price}</u>
        </p>
        <h6>Product name is {name}</h6>

        <button
          onClick={() => props.handleAddToCart(props.shopItems)}
          className="cart-btn"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

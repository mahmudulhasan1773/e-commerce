import React from "react";

const Cart = (props) => {
  const { cart } = props;
  let price = 0;
  for (const product of cart) {
    let product_price = product.price;
    price = price + product_price;
  }
  console.log(props);
  return (
    <div>
      Cart:{props.cart.length}
      <p> price = {price}</p>
    </div>
  );
};

export default Cart;

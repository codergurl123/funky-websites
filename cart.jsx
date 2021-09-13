import React from "react";
import Product from "./product";
import Button from "react-bootstrap/Button";

const Cart = (props) => {
  console.log(`cart: ${props.cart}`);
  return (
    <div className="content-container">
      <div className="header">Cart</div>
      <div className="products-container">
        {props.cart &&
          props.cart.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imgURL={product.data.imgURL}
              name={product.data.name}
              description={product.data.description}
              price={product.data.price}
            >
              <Button>Remove from cart</Button>
            </Product>
          ))}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import "../stylesheets/productDetails.css";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const ProductDetails = (props) => {
  const { productId } = useParams();

  if (!props.productDetails) {
    props.fetch(productId);
  }

  console.log(props.cart);

  if (props.productDetails) {
    return (
      <div className="productDetails-container">
        <div className="productImage-container">
          <Image
            className="productDetailsImage"
            src={props.productDetails.imgURL}
          />
        </div>

        <div className="details">
          <div className="nameDescription">
            <div className="important">{props.productDetails.name}</div>
            <div className="description">
              {props.productDetails.description}
            </div>
          </div>
          <div className="price-container">
            <Button
              onClick={() => props.addProduct(productId)}
            >{`Add to cart $${props.productDetails.price}`}</Button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ProductDetails;

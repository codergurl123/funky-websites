import React from "react";
import "../stylesheets/products.css";
import Product from "./product";
import { useParams } from "react-router-dom";
import * as helpers from "../helpers";
import Button from "react-bootstrap/Button";

const Products = (props) => {
  let { categoryId } = useParams();

  if (props.products && props.products.length === 0) {
    props.fetch(categoryId);
  }

  return (
    <div className="content-container">
      <div className="header">
        {categoryId ? helpers.capitalize(categoryId) : "All Makeup"}
      </div>
      <div className="products-container">
        {props.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            imgURL={product.data.imgURL}
            name={product.data.name}
            description={product.data.description}
            price={product.data.price}
          >
            <Button>{`Choose shade $${product.data.price}`}</Button>
          </Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

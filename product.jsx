import React from "react";
import "../stylesheets/product.css";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  return (
    <>
      <Card>
        <Card.Img className="productImage" src={props.imgURL} />
        <Card.Body>
          <Card.Title>
            <a href={`/product/${props.id}`} style={{ color: "black" }}>
              {props.name}
            </a>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {props.children}
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;

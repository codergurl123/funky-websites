import React from "react";
import "./App.css";
import NavBar from "./components/Nav-bar";
import Sidebar from "./components/sidebar";
import Cart from "./containers/cart-container";
import Products from "./containers/products-container";
import ProductDetails from "./containers/productDetails-container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/products">
            <div className="content">
              <Sidebar />
              <Products />
            </div>
          </Route>
          <Route path="/products/:categoryId">
            <div className="content">
              <Sidebar />
              <Products />
            </div>
          </Route>
          <Route path="/product/:productId">
            <div className="content">
              <Sidebar />
              <ProductDetails />
            </div>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/* 
Nav bar with a brand, a search bar, a sign in feature, and the cart
side bar with various makeup products, each is a link to a new page
gridview of makeup items
  1 makeup item consists of a picture, name, price, and rating.
  clicking will take you to the product details page
  product details page:
    picture enlarged on left
    name, price
    add to cart button
    reviews on bottom



*/

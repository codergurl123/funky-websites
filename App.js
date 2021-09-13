import React from "react";
import "./App.css";
import Posts from "./containers/posts-container";
import NavBar from "./components/navbar";
import Button from "react-bootstrap/Button";
import NewPost from "./containers/newPost-container";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Button
          style={{
            backgroundColor: "lightblue",
            borderColor: "beige",
          }}
          size="lg"
        >
          <Link to="/newPost" style={{ color: "beige" }}>
            {" "}
            + Share a photo or text
          </Link>
        </Button>
        <Switch>
          <Route exact path="/">
            <div style={{ width: 640 }}>
              <Posts />
            </div>
          </Route>
          <Route path="/newPost">
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

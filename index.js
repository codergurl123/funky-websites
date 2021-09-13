import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./ducks/store";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCzsQVl51StN-1Z9njxWjFrKYEZG5F4EC0",
  authDomain: "glamup-2e95c.firebaseapp.com",
  databaseURL: "https://glamup-2e95c.firebaseio.com",
  projectId: "glamup-2e95c",
  storageBucket: "glamup-2e95c.appspot.com",
  messagingSenderId: "469754466349",
  appId: "1:469754466349:web:b819a602c45617d76928a4",
  measurementId: "G-PRMCCF5PLJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

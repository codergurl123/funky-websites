import { connect } from "react-redux";
import Products from "../components/products";
import db from "../index";
import * as actions from "../ducks/actionTypes";

const mapStateToProps = (state) => {
  return {
    category: state.products.category,
    products: state.products.products,
  };
};

const mapDispatchToProps = {
  refresh: () => {
    return (dispatch) => {
      var products = [];
      db.collection("Makeup")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            products.push({
              data: doc.data(),
            });
          });
        })
        .then(() => {
          dispatch({
            type: actions.REFRESH,
            payload: {
              products,
            },
          });
        });
    };
  },
  fetch: (category) => {
    return (dispatch) => {
      var products = [];

      if (category) {
        db.collection("Makeup")
          .where("category", "==", category)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              products.push({
                id: doc.id,
                data: doc.data(),
              });
            });
          })
          .then(() => {
            dispatch({
              type: actions.FETCH,
              payload: {
                products,
              },
            });
          });
      } else {
        db.collection("Makeup")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              products.push({
                id: doc.id,
                data: doc.data(),
              });
            });
          })
          .then(() => {
            dispatch({
              type: actions.REFRESH,
              payload: {
                products,
              },
            });
          });
      }
    };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

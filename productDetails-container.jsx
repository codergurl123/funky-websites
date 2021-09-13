import { connect } from "react-redux";
import ProductDetails from "../components/productDetails";
import db from "../index";
import * as actions from "../ducks/actionTypes";

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails.productDetails,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  fetch: (id) => {
    return (dispatch) => {
      var productDetails = {};

      db.collection("Makeup")
        .doc(id)
        .get()
        .then((doc) => {
          productDetails = doc.data();
        })
        .then(() => {
          dispatch({
            type: actions.FETCH_PRODUCT,
            payload: {
              productDetails,
            },
          });
        });
    };
  },
  addProduct: (id) => ({
    type: actions.ADD_PRODUCT,
    payload: {
      id,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

import { connect } from "react-redux";
import Cart from "../components/cart";
import * as actions from "../ducks/actionTypes";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeProduct: (id) => ({
    type: actions.REMOVE_PRODUCT,
    payload: {
      id,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import * as actions from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
  category: "All",
  products: [],
};

function products(state = initialState, action) {
  switch (action.type) {
    case actions.REFRESH:
      return {
        ...state,
        products: action.payload.products,
      };
    case actions.FETCH:
      return {
        ...state,
        category: action.payload.category,
        products: action.payload.products,
      };
    // view product sets the current product to that object
    default:
      return state;
  }
}

// current product id
function productDetails(state = {}, action) {
  switch (action.type) {
    case actions.FETCH_PRODUCT:
      const newState = {
        ...state,
        productDetails: action.payload.productDetails,
      };
      console.log(`newState: ${newState}`);
      return {
        ...state,
        productDetails: action.payload.productDetails,
      };
    default:
      return state;
  }
}

function cart(state = [], action) {
  // add product, remove product
  switch (action.type) {
    case actions.ADD_PRODUCT:
      console.log("add product here.");
      const newState = [
        ...state,
        {
          id: action.payload.id,
        },
      ];
      console.log(`newState: ${newState}`);

      return newState;
    case actions.REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}

const rootReducter = combineReducers({ products, productDetails, cart });
export default rootReducter;

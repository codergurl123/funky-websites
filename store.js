import { posts } from "./reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  posts,
});

const store = createStore(rootReducer);
export default store;

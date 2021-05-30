import { combineReducers } from "redux";
import all_sales from "./all_sales";
import sort_ascending from "./sort_ascending";

const root_reducer = combineReducers({
  all_sales,
  sort_ascending,
});

export default root_reducer;

import { combineReducers } from "redux";
import all_sales from "./all_sales";

const root_reducer = combineReducers({
  all_sales,
});

export default root_reducer;

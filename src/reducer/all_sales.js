const sales = require("../data/stackline_frontend_assessment_data_2021.json");

const all_sales = (state = sales[0].sales, action) => {
  switch (action.type) {
    case "UPDATE_STATES":
      return action.payload;
    default:
      return state;
  }
};

export default all_sales;

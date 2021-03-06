const sales = require("../data/stackline_frontend_assessment_data_2021.json");

const INITIAL_ITEM = sales[0];

const { id, image, title, subtitle, tags } = INITIAL_ITEM;

export const all_sales = (state = INITIAL_ITEM, action) => {
  switch (action.type) {
    case "UPDATE_STATES":
      return action.payload;
    default:
      return state;
  }
};

export const item_data = { id, image, title, subtitle, tags };
export const graph_data = INITIAL_ITEM["sales"];

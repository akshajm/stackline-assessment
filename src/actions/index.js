export const all_sales = (sales) => {
  return {
    type: "UPDATE_STATES",
    payload: sales,
  };
};

export const sort_ascending = () => {
  return {
    type: "SORT_ASCENDING",
  };
};

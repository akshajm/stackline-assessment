export const all_sales = (sales) => {
  return {
    type: "UPDATE_STATES",
    payload: sales,
  };
};

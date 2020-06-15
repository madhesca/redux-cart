const { REMOVE, ADD, COUNT, SUBTRACT, GET_TOTALS, CLEAR_CART } = require("./types");

export const clearCart = () => ({
  type: CLEAR_CART
});

export const remove = id => ({
  type: REMOVE,
  payload: id
});

export const add = id => {
  return {
    type: ADD,
    payload: id
  };
};

export const subtract = (id, amount) => ({
  type: SUBTRACT,
  payload: { id: id, amount: amount }
});

export const getTotals = () => ({
  type: GET_TOTALS
});

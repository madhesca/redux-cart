import cartItems from "../cart-items";
import { REMOVE, ADD, SUBTRACT, GET_TOTALS, CLEAR_CART } from "./types";

const initialState = {
  cart: cartItems,
  amount: 0,
  total: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    case REMOVE:
      console.log("remove", action.payload);
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case ADD:
      const singleAdd = state.cart.map(item => {
        if (item.id === action.payload) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: singleAdd
      };
    case SUBTRACT:
      let singleLess = [];

      if (action.payload.amount === 1) {
        singleLess = state.cart.filter(item => {
          return item.id !== action.payload.id;
        });
      } else {
        singleLess = state.cart.map(item => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }

      return {
        ...state,
        cart: singleLess
      };

    case GET_TOTALS:
      console.log("totalsss");
      let { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0
        }
      );

      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        amount,
        total
      };
    default:
      return state;
  }
};

export default reducer;

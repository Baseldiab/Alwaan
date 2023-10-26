import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: getInitialCart(),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const findProduct = state.find((item) => item.id === product.id);

      if (findProduct) {
        findProduct.quantity = Number(findProduct.quantity) + 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    onChangeQuantity: (state, action) => {
      const { productId, qty } = action.payload;
      const findProduct = state.find((item) => item.id === productId);
      findProduct.quantity = qty;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteCartItem: (state, action) => {
      const productId = action.payload;
      const updatedState = state.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    },
    calcTotalPrice: (state) => {
      let totalPrice = 0;
      totalPrice = state.reduce((acc, product) => {
        acc += product.price * product.quantity;
        localStorage.setItem("totalPrice", JSON.stringify(acc.toFixed(2)));
        return acc;
      }, 0);
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    },
  },
});

export const { addToCart, deleteCartItem, onChangeQuantity, calcTotalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;

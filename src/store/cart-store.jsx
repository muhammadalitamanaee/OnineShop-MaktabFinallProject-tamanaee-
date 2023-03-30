import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: JSON.parse(localStorage.getItem("cartQuantity")),
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    //the replaceCart is for replacing the shopping cart with the data we fetched from backend
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: +newItem.price,
          quantity: 1,
          totalPrice: +newItem.price,
          image: newItem.image,
          brand: newItem.brand,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += +newItem.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));
    },
    removeProduct(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id.id);
      state.totalQuantity--;
      state.changed = true;
      localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));

      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id.id);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        existingitem.quantity--;
        existingitem.totalPrice -= +existingitem.price;
      }
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartQuantity", JSON.stringify(0));
    },
    loadCart(state) {
      const cartItems = localStorage.getItem("cartItems");
      const Q = localStorage.getItem("cartQuantity");

      if (cartItems) {
        state.items = JSON.parse(cartItems);
        state.totalQuantity = JSON.parse(Q);
      }
    },
  },
});

export default cartSlice;
export const cartAction = cartSlice.actions;

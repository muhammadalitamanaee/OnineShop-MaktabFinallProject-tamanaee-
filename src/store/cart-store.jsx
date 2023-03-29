import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [], // list of items in cart
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const item = action.payload;
//       const existingItem = state.items.find((i) => i.id === item.id);
//       console.log("add");
//       if (existingItem) {
//         // if the item already exists in the cart, increase its quantity
//         console.log("have this already");
//         existingItem.quantity += item.quantity;
//       } else {
//         // otherwise, add the item to the cart
//         console.log("we didin have that we added");
//         state.items.push(item);
//       }
//     },
//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.items = state.items.filter((i) => i.id !== itemId);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//     loadCartFromLocalStorage: (state) => {
//       const savedCart = localStorage.getItem("shoppingCart");

//       if (savedCart) {
//         state.items = JSON.parse(savedCart);
//       }
//     },
//     saveCartToLocalStorage: (state) => {
//       localStorage.setItem("shoppingCart", JSON.stringify(state.items));
//     },
//   },
// });

// const sendCartData=()=>{
// we cando it  here too but we decide to do it in the other file named cart-action.jsx
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
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
    },
    removeProduct(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id.id);
      state.totalQuantity--;
      state.changed = true;

      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id.id);
      } else {
        existingitem.quantity--;
        existingitem.totalPrice -= +existingitem.price;
      }
    },
  },
});

export default cartSlice;
export const cartAction = cartSlice.actions;

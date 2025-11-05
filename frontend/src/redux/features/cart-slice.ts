import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { nanoid } from "nanoid";

type InitialState = {
  items: CartItem[];
};

type CartItem = {
  id: number;
  cartItemId: string;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

const storedItems = typeof window !== "undefined" && localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems")!)
  : [];

const initialState: InitialState = {
  items: storedItems.map((item: CartItem) => ({
    ...item,
    imgs: item.imgs || { thumbnails: [], previews: [] }, // aseguramos imgs
  })),
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Omit<CartItem, "cartItemId">>) => {
      const { id, title, price, quantity, discountedPrice, imgs } = action.payload;

      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        // Sumar la cantidad en lugar de crear un nuevo item
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          cartItemId: nanoid(),
          title,
          price,
          quantity,
          discountedPrice,
          imgs,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const cartItemId = action.payload;
      state.items = state.items.filter(item => item.cartItemId !== cartItemId);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.cartItemId === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const selectCartItems = (state: RootState) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.discountedPrice * item.quantity;
  }, 0);
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
} = cart.actions;
export default cart.reducer;

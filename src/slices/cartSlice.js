import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  shippingFee: 0,
  totalPrice: 0,
  tax: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { data: newItem, amount: quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity = state.totalQuantity + Number(quantity)
      state.totalPrice = Number(
        Number(state.totalPrice + newItem.price * Number(quantity)).toFixed(2)
      )
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: Number(quantity),
          totalPrice: newItem.price * Number(quantity),
        })
      } else {
        existingItem.quantity = existingItem.quantity + Number(quantity)
        existingItem.totalPrice = Number(
          Number(existingItem.totalPrice) + newItem.price * Number(quantity)
        ).toFixed(2)
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
    clearCart(state) {
      state.items = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
    onQuantityChange(state, action) {
      const { id, increase } = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (increase) {
        state.totalQuantity++
        state.totalPrice = state.totalPrice + Number(existingItem.price)
        existingItem.quantity++
        existingItem.totalPrice =
          existingItem.totalPrice + Number(existingItem.price)
      } else {
        state.totalQuantity--
        state.totalPrice = state.totalPrice - Number(existingItem.price)
        existingItem.quantity--
        existingItem.totalPrice =
          existingItem.totalPrice - Number(existingItem.price)
      }
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  onQuantityChange,
} = cartSlice.actions

export const selectCart = (state) => state.cartSlice.items
export const selectCartItems = (state) => state.cartSlice.items
export const selectTotalQuantity = (state) => state.cartSlice.totalQuantity
export const selectTotalPrice = (state) => state.cartSlice.totalPrice

export default cartSlice.reducer

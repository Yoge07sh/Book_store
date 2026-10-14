import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    products: [],
    message: ''
  },

  reducers: {
    // Add Product
    addProduct: (state, action) => {
      const product = state.products.find(
        item => item._id === action.payload._id
      )

      if (product) {
        state.message = 'Item already added to cart'
      } else {
        state.products.push(action.payload)
        state.message = 'Item added to cart successfully'
      }
    },

    // Delete Product
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        item => item._id !== action.payload
      )

      state.message = ''
    },

    // Clear Cart Message
    clearCartMessage: state => {
      state.message = ''
    }
  }
})

export const {
  addProduct,
  deleteProduct,
  clearCartMessage
} = cartSlice.actions

export default cartSlice.reducer


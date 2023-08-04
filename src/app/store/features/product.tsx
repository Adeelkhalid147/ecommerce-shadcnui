import { products } from '@/app/utils/mock'
import { product } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: product[] = products

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = productSlice.actions

export default productSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './features/cart'
import  productSlice  from './features/product'
// ...

export const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,
   
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch










{/*

npm install @reduxjs/toolkit
npm install react-redux
redux ko use krne k liye phle ye 2 command run krni hai us k bad 
as link (https://redux-toolkit.js.org/tutorials/typescript)
pe jse likha h k app mai store ka folder bnane h or yhi same code 
copy kr k paste kr dena h reducer mai jo kuch arha h us ko remove kr dena h
=> us k bd hooks k file bnani h store k folder mai he or jo kuch
hooks ka code likha h copy kr k paste kr dena h hooks.tsx mai
=> us k bd store  mai ak folder bnana h features ka us mai file 
bnani h cart k or link mai jo code h same copy kr k paste 
kr dena h reducer ka data as mai se b delet kr dena h
jha pe counterslice likha h us ko cartslice kr dna h
=> ak or file bnani h product.tsx k feature k folder mai us mai
cart mai jo code ho ga 
(
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const {  } = cartSlice.actions

export default cartSlice.reducer
) paste kr dena h jha pe b cartslice likha h us ko productslice
kr dena h

=> app mai ak folder bnana h utils k name se us mai do file bnani
hai types.tsx or mock.tsx
=> app mai direct ak file bnani h providers.tsx k





*/}

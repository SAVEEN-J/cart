import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import productReducer  from "./slices/productSlice";




const reducer = combineReducers({
    productsState: productsReducer,
    productState: productReducer
    // authState: authReducer,
    // cartState: cartReducer,
    // orderState: orderReducer,
    // userState: userReducer
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;
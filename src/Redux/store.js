import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice/cardSlice"

const store = configureStore({
    reducer:{
        card: cardReducer
    }
})

export default store;
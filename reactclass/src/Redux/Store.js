import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countslice.js"

export const store = configureStore({
    reducer: {
        countSlice
    }
})


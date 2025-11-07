import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../futsher/caucl/calcSlice"

export const store=configureStore({
    reducer:{
        calc:calcReducer,
    },
});
    

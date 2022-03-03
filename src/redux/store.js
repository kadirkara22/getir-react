import { configureStore } from "@reduxjs/toolkit";
import GetirSlice from "./GetirSlice";

export const store = configureStore({
    reducer: {
        getir: GetirSlice
    }
})
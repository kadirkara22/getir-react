import { createSlice } from "@reduxjs/toolkit";



export const GetirSlice = createSlice({
    name: 'getir',
    initialState: {
        active: "getir",
    },
    reducers: {
        selectMenu: (state, action) => {
            state.active = action.payload
        }

    }



})

export const { selectMenu } = GetirSlice.actions;
export default GetirSlice.reducer;
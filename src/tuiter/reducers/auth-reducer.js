import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk, profileThunk, updateUserThunk } from "../services/auth-thunks";

const initialState = { currentUser: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]:
            (state, {payload}) => {
                state.currentUser = payload;
            },
        
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
            },
        
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            },
        
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            },
        
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
    },
});

export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "username": "JavaScript",
    "handle": "@JS",
    "image": "img_js.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Music",
    "time": "3h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    
    // same as "initialState": initialState
    // define asynchronous reducers
    // if request is not yet fulfilled …
    initialState,
    extraReducers: {
        // when server is done
        [updateTuitThunk.fulfilled]:

            // payload contains updated tuit
            (state, {payload}) => {

                // clear loading flag
                state.loading = false

                // find index of updated tuit in array
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)

                // merge old tuit with updated tuit
                state.tuits[tuitNdx] = { ...state.tuits[tuitNdx], ...payload}
            },

        // when server responds
        [createTuitThunk.fulfilled]:
            // payload contains new tuit
            (state, {payload}) => {
                // Clear loading flag
                state.loading = false
                // append new tuit to tuits array
                state.tuits.push(payload)
            },


        // handle successful response
        [deleteTuitThunk.fulfilled]:
            // payload from action contains tuit ID to
            // remove, turn off loading flag
            // filter out tuit whose ID matches tuit to remove

            (state, {payload}) => {
                state.loading = false
                state.tuits = state.tuits.filter(t => t._id !== payload) 
            },

        [findTuitsThunk.pending]:
            (state) => {
                // set loading true so UI can display spinner
                // empty tuits since we are still fetching them

                state.loading = true
                state.tuits = []
            },

        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {

                // when we get response, request is fulfilled
                // we extract/destruct payload from action object
                // turn off loading flag since we have the data
                // payload has tuits from server and update redux state
                state.loading = false
                state.tuits = payload
            },

        [findTuitsThunk.rejected]:
            (state, action) => {
                // if request times out, or respond with error
                // reset loading flag and report error
                state.loading = false
                state.error = action.error
            }
    },

    reducers: {

        deleteTuit(state, action) {
            const index = state.tuits
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.tuits.splice(index, 1);
        },

        createTuit(state, action) {
            state.tuits.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        likeUnlikeTuit(state, action) {
            // Get current tuit
            const current = state.tuits.find(tuit => tuit._id === action.payload)
            
            // Change states
            if (current.liked === false) {
                current.likes += 1;
                current.liked = true;
            } else {
                current.likes -= 1;
                current.liked = false;
            }
        }
    }
});

export const {createTuit, deleteTuit, likeUnlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
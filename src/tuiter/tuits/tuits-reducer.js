import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
    "userName": "JavaScript",
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
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },

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
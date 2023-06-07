import { createSlice } from "@reduxjs/toolkit"; //import slice
import whoArray from "./who.json"; // import data from JSON file

const whoSlice = createSlice({ // create the slice
    name: "who",               // name the reducer
    initialState: whoArray     // initialize reducer's state
});

export default whoSlice.reducer;    // export the reducer
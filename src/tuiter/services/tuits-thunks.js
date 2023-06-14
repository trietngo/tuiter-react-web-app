import { createAsyncThunk } from "@reduxjs/toolkit"; // import createAsyncTrunk
import * as service from "./tuits-service"; // import all exported funcs as service

export const findTuitsThunk = createAsyncThunk( // create thunk for findTuits
    "tuits/findTuits", // give unique name, thunk invokes
    async () => await service.findTuits() // service function. Returned data goes in redux action's payload
);

export const deleteTuitThunk = createAsyncThunk( // unique thunk identifier
    "tuits/deleteTuit", // give unique name, thunk invokes
    async (tuidId) => {
        await service.deleteTuit(tuidId) // service method
        return tuidId // return tuitID so we can remove tuit from reducer's store
    }
);

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const updateTuitThunk = createAsyncThunk(
    // create update tuit thunk

    'tuits/updateTuit', // unique identifier
    async (tuit) => // accepts updated tuit
        await service.updateTuit(tuit) // ends updated tuit to server with service
)
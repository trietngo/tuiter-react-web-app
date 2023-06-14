import axios from 'axios'; // import axios
// const TUITS_API = 'http://localhost:4000/api/tuits'; // location of HTTP services

const TUITS_API = 'https://tuiter-node-server-app-cefm.onrender.com/api/tuits';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => { // async tags this func as asynchronous
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
    const tuits = response.data; // extract JSON array from response from server
    return tuits; // return tuits
}

export const deleteTuit = async (tid) => { // send HTTP DELETE request to server
    const response = await axios.delete(`${TUITS_API}/${tid}`) // append tuit's ID to URL
    return response.data // data contains response's status
}

export const updateTuit = async (tuit) => {
    // service function accepts tuit to send server
    // send HTTP PUT request appending tuit's ID
    // to URL, and embed tuit object in BODY

    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);

    // return tuit update to update in reducer's
    // state's store
    return tuit;
}
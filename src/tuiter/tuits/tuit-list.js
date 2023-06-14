import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks"; // import the thunk

const TuitsList = () => {

  const { tuits, loading } = useSelector(state => state.tuits) // grab tuits and loading flag from reducer on component load
  const dispatch = useDispatch();

  useEffect(() => { // invoke find tuits thunk to fetch tuits and put them in the reducer's store
    dispatch(findTuitsThunk()) // so we can extract them with useSelector() and render tuits below
  }, [])

  return(
    <ul className="list-group">
      {/* If loading flag is true, show a loading message while data is still coming back from the server */}
      {
        loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      {
        tuits.map(tuit =>
          <TuitItem
            key={tuit._id}
            tuit={tuit}
            />
        )
      }
    </ul>
  );
};
export default TuitsList;
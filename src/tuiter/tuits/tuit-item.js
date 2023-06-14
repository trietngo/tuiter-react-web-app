import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = (tuits) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row justify-content-between">

                <div className="col-2">
                    <img width={50} className="float-end rounded-circle" src={`..//images/${tuits.tuit.image}`}/>
                </div>

                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                                    onClick={() => deleteTuitHandler(tuits.tuit._id)}></i>
                    
                        <span className="fw-bold">{tuits.tuit.username}</span> <i class="bi bi-patch-check-fill text-primary"></i> {tuits.tuit.handle} &#x2022; {tuits.tuit.time}</div>
                    <div>{tuits.tuit.tuit}</div>
                    <div>
                        <TuitStats tuit={tuits.tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
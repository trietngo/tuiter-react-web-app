import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = (
    {
        tuit = ""
    }

) => {

    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row justify-content-between">

                <div className="col-2">
                    <img width={50} className="float-end rounded-circle" src={`..//images/${tuit.image}`}/>
                </div>

                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                                    onClick={() => deleteTuitHandler(tuit._id)}></i>
                    
                        <span className="fw-bold">{tuit.userName}</span> <i class="bi bi-patch-check-fill text-primary"></i> {tuit.handle} &#x2022; {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div>
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;
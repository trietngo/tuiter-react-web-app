import React from "react";

import { useDispatch } from "react-redux";
import { likeUnlikeTuit } from "./tuits-reducer";

const TuitStats = ( {tuit} ) => {

    const dispatch = useDispatch();

    const likeTuitHandler = (id) => {
        dispatch(likeUnlikeTuit(id));
    }

    // Shorten long numbers: 1465 = 1.4K
    const shortenNum = (num) => {
        return num > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : num
    }

    return(
        <div className="row">
            <div className="col">
                <i class="bi bi-chat"></i> &nbsp;
                {shortenNum(tuit.replies)}
            </div>

            <div className="col">
                <i class="bi bi-recycle"></i> &nbsp;
                {shortenNum(tuit.retuits)}
            </div>

            <div className="col">
                <i className={`bi ${tuit.liked === true ? "bi-heart-fill text-danger" : "bi-heart"}`}
                    onClick={() => likeTuitHandler(tuit._id)}></i> &nbsp;
                {shortenNum(tuit.likes)}
            </div>

            <div className="col-2">
                <i class="bi bi-share"></i> &nbsp;
            </div>
        </div>
    )
}

export default TuitStats;
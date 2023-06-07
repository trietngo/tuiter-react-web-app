import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);

  return(
    <div>
      <h3>Who to follow</h3>
      <ul className="list-group">
        {
          whoArray.map(who =>
            <WhoToFollowListItem
              key={who._id}
              who={who}
              />
          )
        }
      </ul>
    </div>
    
  );
};
export default WhoToFollowList;
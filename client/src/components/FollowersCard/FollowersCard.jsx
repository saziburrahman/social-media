import React from "react";
import "./FollowersCard.css";

import { Folowers } from "../../Data/FolowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Folowers.map((folower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={folower.img} alt="" className="followerImg" />
              <div className="name">
                <span>{folower.name}</span>
                <span>@{folower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;

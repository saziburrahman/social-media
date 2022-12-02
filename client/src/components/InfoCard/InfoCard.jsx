import React from "react";
import "./InfoCard.css";

import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <UilPen />
      </div>
      <div className="info">
        <span><b>Status</b></span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span><b>Lives in</b></span>
        <span>Kushtia</span>
      </div>
      <div className="info">
        <span><b>Works at</b></span>
        <span>Remote</span>
      </div>
      <button className="button">Logout</button>
    </div>
  );
};

export default InfoCard;

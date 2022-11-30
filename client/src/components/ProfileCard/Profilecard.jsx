import React from 'react'
import "./ProfileCard.css"
import Cover from "../../img/cover.jpg"
import Profile from "../../img/profileImg.jpg"

const Profilecard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Sazibur Rahman</span>
        <span>Junior Software Engineer</span>
      </div>

      <div className="followingStatus">
        <hr />
        <div>
            <div className="follow">
                <span>10000</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>
        </div>
        <hr />
      </div>
      <span>
        My Profile
      </span>
    </div>
  )
}

export default Profilecard

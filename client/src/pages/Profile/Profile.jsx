import React from "react";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";
import PostSide from "../../components/PostSide/PostSide";
import Profilecard from "../../components/ProfileCard/Profilecard";
import RightSide from "../../components/RightSide/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <Profilecard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;

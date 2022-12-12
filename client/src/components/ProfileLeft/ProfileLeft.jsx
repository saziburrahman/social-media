import React from "react";
import "./ProfileLeft.css";
import '../ProfileSide/ProfileSide.css'
import FollowersCard from '../../components/FollowersCard/FollowersCard'
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from '../../components/LogoSearch/LogoSearch'
const ProfileLeft = () => {
  return <div className="ProfileSide">
    <LogoSearch />
    <InfoCard />
    <FollowersCard />
  </div>;
};

export default ProfileLeft;

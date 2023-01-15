import React from 'react'
import "./ProfileSide.css"
import LogoSearch from '../LogoSearch/LogoSearch'
import Profilecard from '../ProfileCard/Profilecard'
import FollowersCard from '../FollowersCard/FollowersCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <Profilecard location="homepage" />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide

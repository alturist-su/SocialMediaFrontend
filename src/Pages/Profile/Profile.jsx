import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart'

//profile
const Profile = () => {
  return (
    <div className='px-20'>
        <div className=''>
        <h1>Profile Page</h1>
            <ProfileUserDetails />
        </div>
        <div>
            <ReqUserPostPart/>
        </div>

    </div>
  )
}

export default Profile

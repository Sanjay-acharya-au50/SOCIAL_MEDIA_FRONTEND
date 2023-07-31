import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Profile = () => {
    const {id} = useParams()
    // console.log(id)
    const [profile,setProfile] = useState([])
    const [profileName, setProfileName] = useState();
    const [displayName, setDisplayName] = useState('')
    const [follow,setFollow] = useState(false);
    useEffect(()=>{
      
        fun()
    },[profileName])

    const fun = async () => {
      try {
        const res = await axios.post(`/profile/${id}`,{
            id
        });

        console.log(res)

            if(res.status  === 202){

              setDisplayName(res.data.validFriend.name);
                setProfile(res.data.validFriend);
                setProfileName(res.data.isFriend)

            }
            else if(res.status === 203){
              setDisplayName(res.data.validFriend.name)
              setProfile(res.data.validFriend);
              setProfileName(res.data.isFriend)
              // alert("fake friend")
            }

      } catch (error) {
        console.log(error)
      }
    }


   

// useEffect(()=>{
//   if(profileName){
//     setFollow(true)
//   }else{
//     setFollow(false)
//     }
// },[profileName])

const handlefollow = async () => {
  console.log('followd')
  const res = await axios.post(`/follow/${id}`, {id});
  console.log('resFromFollo: ',res);
}


const handleUnfollow = async () => {
  console.log('unfollowd')
  const res = await axios.post(`/unfollow/${id}`, {id})
  console.log('resFromUnfollo: ',res);
}

    console.log(follow)
    // console.log(profileName)
  return (
    <div className='bg-red-300 p-5'>
        <div>Profile</div>
        
          {
            profileName && profileName ? <>

            <div>Name: {profile.name}</div>
        <div>Email: {profile.email}</div>
        <div>Profile: {profile.sammary}</div>
            </> : <>
            <div>Name: {displayName}</div>

            </>
          }
            <p >
              
            
            {/* <div>{
                follow ? <div onClick={handlefollow}>Unfollow</div> : <div onClick={handleUnfollow}>follow</div>
              }</div> */}
            <button className='p-2 border m-1 hover:bg-black hover:text-white' onClick={handlefollow}>follow+</button>
            <button className='p-2 border m-1  hover:bg-black hover:text-white' onClick={handleUnfollow}>Unfollow+</button>
            </p>

         
        
        
    </div>
  )
}

export default Profile
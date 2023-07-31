import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import Homefriends from '../components/Homefriends'

const Home = () => {
  const {state,setState} = useContext(Context)
  const [friendsList,setFriendsList] = useState([])

  console.log("sate",state)
  const navigate = useNavigate()

  useEffect(()=>{
  fun()
},[])


const fun = async () => {
  
  try {
    const res = await axios("/home");
    console.log(res)
    setState(res.data)
    // setHome(res.data)
  } catch (error) {
    // alert(error.response.data.err)
    navigate("/login")
    console.log("err",error.response.data.err)
  }

}

// console.log(home)

const getFriends = async (id) => {
  try {
    const res = await axios(`/getfriends/${id}`,{
      id
    })
    if(res.status === 201){

      // console.log(res.data.friends); 
      setFriendsList(res.data.friends)
    }
  } catch (error) {
    console.log(error)
  }
}

console.log(friendsList.length)

  return (

      <>

        <div className='bg-orange-300 grid grid-cols-2'>
        <div>
          {
            state?.name ? (<>  Users
              <Homefriends/></>) : ""
          }
        
          </div>
          <div>
          myPROFILE
        {state?.name ? <>
          <div>name:{state.name}</div> 
        <div>summmy:{state.sammary}</div> 
        <div>emaie:{state.email}</div></> : "no data"}
        <div>

        </div>
        <div className='bg-black p-2 text-white' onClick={()=>getFriends(state.id)}>friends</div>
        {
            friendsList && friendsList.map((ele,i)=>{
              return(
                <div key={i} className='border bg-black text-white'>
                <div>{ele.i}</div>
                  <div>{ele.name}</div>
                  <div>{ele.sammary}</div>
                </div>
              )
            })
        }
          </div>
       
    
      </div>
    
      </>
  )
}

export default Home
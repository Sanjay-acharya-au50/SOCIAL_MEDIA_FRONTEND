import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/UserContext'
import { Link } from 'react-router-dom'

const Homefriends = () => {
    const {state,setState,follow, setFollow} = useContext(Context);
    console.log(state)
    const {friends,setFriends} = useContext(Context);


    useEffect(()=>{
      fun()
    },[])

    const handleClickFollow = async (id) => {
        // e.preventDefault()
        console.log(id)
        // alert(id)

        try {
            const res = await axios.post(`/follows/${id}`,
            {
                id
            });
            console.log(res)
            if(res.status === 201){
                setFollow(true)
            }
        } catch (error) {
            console.log(error)
        }

    }
console.log(follow) 
    const fun = async () => {
        try {
            const res = await axios('/getFriends');
            console.log("list:",res)
            if(res.status === 201){
                setFriends(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    

console.log(friends)




  return (
    <div>
        {
            friends && friends.filter((item)=>{
                return item._id !== state.id
            }).map((ele,i)=>{
                return(
                    <div className=' m-1' key={i}>
                        <Link to={`/profile/${ele._id}`} className='border bg-yellow-400'>
                    <p>name: {ele.name}</p>
                    <p>email: {ele.email}</p>
                        </Link>
                    <div className='bg-red-500 p-2 text-white m-2' onClick={()=>handleClickFollow(ele._id)}>
                        {
                            follow ? 'unflow' : 'follow'
                        }

                    </div>
                    </div>
                )
            }) 
        }


    </div>
  )
}

export default Homefriends
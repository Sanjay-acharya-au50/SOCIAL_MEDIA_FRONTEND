import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { Context } from '../context/UserContext'

const GetErr = () => {

    const {protect1,setProtect1} = useContext(Context)
   

    console.log("p1",protect1)

    useEffect(()=>{
        const fun = async () => {
            try {
                const res = await axios.get("/get")
                console.log("res:",res)
                if(res.status === 201){
                    console.log("ser:",res)
                }
            } catch (error) {
                console.log(error.response.data)

            }
        }
        fun()

    },[protect1])


    const handleCLick = (e) => {
        e.preventDefault();
        // if(protect1){
        // setProtect1(false);
        // }else{
        // setProtect1(true);

        // }
    }

  return (
    <>
    
    <div>GetErr</div>

    <form onSubmit={handleCLick}>
        <button>click</button>
    </form>
    </>
  )
}

export default GetErr
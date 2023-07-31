import React, { useContext, useEffect } from 'react'
import { Context } from '../context/UserContext';
import axios from 'axios'
const Contect = () => {
  const {protect,setProtect} = useContext(Context)

  // useEffect(()=>{
  //   const fun = async () => {
  //       try {
  //         fetch('https://jsonplaceholder.typicode.com/users').then((e)=>e.json()).then((i)=>{console.log(i)})
  //         // const res = await axios('https://jsonplaceholder.typicode.com/users');
  //         // console.log(res)
  //       } catch (error) {
  //         console.log(error)
          
  //       }
  //     }
  //     fun()
  // },[])


  const handlClick = (e) => {
    e.preventDefault();
    if(protect){
      setProtect(false)
    }else{
      setProtect(true)
    }
  }
  console.log("frontend",protect)

  useEffect(()=>{
    const fun = async () => {
      try {
        const res = await axios.post("/contact", {protect})
        console.log(res)
        if(res.status === 200){
          console.log(res)
        }
      } catch (error) {
          console.log(error.response.data)

      }
    }
    fun()
  },[protect])

  return (
    <>
    <div>Contect</div>
    <p>user status : {protect ? "active" : "offline"}</p>
    <form onSubmit={handlClick}>

    <button >click me</button>
    </form>
    </>
  )
}

export default Contect
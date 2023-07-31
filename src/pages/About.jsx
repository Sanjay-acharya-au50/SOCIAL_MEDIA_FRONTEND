import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const arr = ['sab','man']

const About = () => {


  const [state,setState] = useState(0)
  const [state1,setState1] = useState(0)
    


    const fun = async () => {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/users');
        console.log(res);

      } catch (error) {
        console.log(error)
      }
    }
    fun()

   useEffect(()=>{
    alert('one');
   },[state,state1])

    const handleClick1 = () => {
      setState(state+1)
    }

    const handleClick2 = () => {
      alert('two')
      setState1(state1+1)
    }


  return (
    <div>
    about


    <div className='flex flex-col gap-3'>

      <button className='border border-black p-2' onClick={handleClick1}> click0- {state}</button>
      <button className='border border-black p-2' onClick={handleClick2}>click1- {state1}</button>
    </div>
    </div>
  )
}

export default About
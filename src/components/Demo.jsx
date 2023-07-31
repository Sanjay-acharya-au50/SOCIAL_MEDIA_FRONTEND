import React, { useCallback, useEffect, useState } from 'react'

const Demo = () => {
const [state,setState]= useState("")
const [state2,setState2]= useState("")

// useEffect(()=>{
//     handleClick2(setState2("san1"))
// },[])

const handleClick = useCallback(()=>{
    setState("san")
},[])
console.log(state)
  return (
    <div>
        dev
    <button onClick={handleClick}>click</button>
    {/* <button onClick={handleClick2}>click</button> */}
    </div>
  )
}

export default Demo
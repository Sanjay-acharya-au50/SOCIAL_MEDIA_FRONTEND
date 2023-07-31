import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/UserContext'


const Login = () => {
  const {state, setState} = useContext(Context)
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")



const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await axios.post("/login",{
    email,password
  })
  console.log(res)
  if(res.status === 200){
    setState(res.data)
    navigate('/')
  }
}
console.log(state)


  return (
    <div className="m-5 ">

      <form onSubmit={handleSubmit}>
      <div className="flex border flex-col p-1">


        <input
          type="text"
          required
          className="border"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          className="border"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" name="submit" id="" className="border "/>
      </div>

      </form>
    </div>
  )
}

export default Login
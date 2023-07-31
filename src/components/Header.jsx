import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../context/UserContext'
import axios from 'axios'

const Header = () => {
  const navigate = useNavigate()
  const {state,setState} = useContext(Context);

  console.log(state)
  
  const HandleLogout = async (e) => {
    try {
      const res = await axios.post('/logout');
      console.log(res)
      e.preventDefault();
      setState(null)
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <div >
    <Link to={'/'} className='m-2'>Home</Link>

    {
      state?.name ? <button onClick={HandleLogout}> Logout</button> : <>
      <Link to={'/login'} className='m-2'>Login</Link>
    <Link to={'/register'} className='m-2'>Register</Link></>
    }

    
    {/* <Link to={'/contact'} className='m-2'>conatct</Link> */}
    <Link to={'/about'} className='m-2'>about</Link>
    {/* <Link to={'/get'} className='m-2'>get</Link> */}
    </div>
  )
}

export default Header
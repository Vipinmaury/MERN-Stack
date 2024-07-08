import React from 'react'
import {NavLink} from 'react-router-dom'

const Navabr = () => {
  return (
    <>
       <div className='navbar'>
          <NavLink className='navlinks' to="/home">Home</NavLink>
          <NavLink className='navlinks' to="/home">About</NavLink>
          <NavLink className='navlinks' to="/home">Contact us</NavLink>

       </div>
    </>
  )
}

export default Navabr

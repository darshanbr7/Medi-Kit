import React from 'react'
import "./Navbar.css"
import{BiLogInCircle} from "react-icons/bi"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <nav className='navbar navbar-expand-lg bg-info'>
      <div className='navbar-brand ml-4 text-warning'>MEDI-KIT</div>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
          {
            localStorage.getItem("token")?<></>:<li className='nav-item'>
            <BiLogInCircle size={26} className='mr-4' onClick={()=>{navigate("/login")}}/>
            </li>
          }
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
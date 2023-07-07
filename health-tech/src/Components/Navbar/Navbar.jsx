import React from 'react'
import "./Navbar.css"
import{BiLogInCircle} from "react-icons/bi"
import {RiAccountCircleLine} from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div>
    <div className="container-fluid">
      <nav className='navbar navbar-expand-lg bg-info'>
        <div className=' navbar navbar-brand text-white' onClick={()=>{navigate("/")}}>Medi Kit</div>
        <div className="ml-auto">
          <ul className='navbar-nav'>
            
             <li className='nav-item'><Link className=' nav-link  text-white mr-2' to={"/product"}>Product</Link></li>
            
            {
              localStorage.getItem("token")  ?   <li className='nav-item'><Link  className='nav-link text-white mr-2'  to={"/account"}><RiAccountCircleLine size={26} color={"white"}/></Link>   </li>     : <li className='nav-item'><Link  className='nav-link text-white mr-2'  to={"/login"}><BiLogInCircle size={26} color={"white"}/></Link>   </li>   
            }
           
          </ul>
        </div>
      </nav>
    </div>

    </div>
  )
}

export default Navbar
/*
{

  localStorage.getItem("token")?<div className='nav-item' onClick={()=>{
    localStorage.removeItem("token")
    alert("logout Succesfully")
  }}>Logout</div>:<li className='nav-item'>
  <BiLogInCircle size={26} className='mr-4' onClick={()=>{navigate("/login")} }/>
  </li>
  
}
*/
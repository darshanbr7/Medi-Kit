import React from 'react'
import {RiAccountPinCircleLine} from "react-icons/ri"
import {HiOutlineMail} from "react-icons/hi"
import {MdPassword} from "react-icons/md"
import {Link} from "react-router-dom"
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className='login'>
      <form action="">
        <div id='card'>
                <div  id='icon'>
                <label ><HiOutlineMail size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Email '/>
                </div>
                <div id='icon'>
                <label ><MdPassword size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Password'/>
                </div>
                <button className="btn btn-danger my-3">Login</button>
                
                <p >new  User ?  <Link to={"/Signup"} color={"white"}>Register</Link></p>   
                </div>
                </form>                 
          </div>
    </>
  )
}

export default Login

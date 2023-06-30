import React, { useState } from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {MdPassword} from "react-icons/md"
import {Link} from "react-router-dom"
import "./Login.css"
import axios from 'axios'
const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const formdata={
    "email":email,
    "password":password
  }
  const submitHandler=(event)=>{
    event.preventDefault()
    axios.post("http://localhost:3090/api/login",formdata)
          .then((response)=>{
            let result=response.data
            if(result.hasOwnProperty("error")){
              alert(result.error)
            }else{
            localStorage.setItem("token",result.token)
            }
           
          })
          .catch((error)=>{
            console.log(error);
          })
  }
  return (
    <>
    <div className='login'>
      <form onSubmit={submitHandler}>
        <div id='card'>
                <div  id='icon'>
                <label ><HiOutlineMail size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Email ' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <div>{}</div>
                </div>
                <div id='icon'>
                <label ><MdPassword size={25}/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
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

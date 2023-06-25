import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {MdPassword} from "react-icons/md"
import {RiMapPinUserLine} from "react-icons/ri"
import "./Signup.css"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Signup = () => {
    const navigate=useNavigate()
    const[name,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[password,setPassowrd]=React.useState("")
    const[check,setcheck]=React.useState(false)
 const submitHandler=(e)=>{
  e.preventDefault()
  try{
    axios.post("http://localhost:3090/api/register",{
      "name":name,
      "email":email,
      "password":password
    })
           .then((res)=>{
            console.log(res);
             
             alert(res.data.error.errors.email.message);
             
           })
           .catch((err)=>{
            
             console.log({"error":err});
           })
  }
  catch(er){
   console.log({"error":er});
  }
 }
           
            
    
  return (
   <>
   <section className='signup'>
    <div className="container ">
        
            <form  onSubmit={submitHandler}>
            <div id='signup'>
                <div id='icon'>
                <label ><RiMapPinUserLine size={25} color='brown'/>  </label>
                <input type="text"  className='form-box'  autoComplete='off' placeholder='Name ' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div  id='icon'>
                <label ><HiOutlineMail size={25}/>  </label>
                <input type="text"  className='form-box'   placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div id='icon'>
                <label ><MdPassword size={25}/>  </label>
                <input type="text"  className='form-box'   placeholder='Password' value={password} onChange={(e)=>{setPassowrd(e.target.value)}}/>
                </div>
                
                <div className='checkbox'>
                <input type="checkbox" className='form-check-lg'  onChange={(e)=>{setcheck(e.target.checked)}} />
                </div>
                <p> Please Accept the Terms and Condition</p>
                <button className='btn btn-primary'  disabled={!check}>Register</button>
               
                <p className='paragraph'>Existing user ?  <Link to={"/login"} color='white'>Login</Link></p>   
            </div>
            </form>
       
    </div>
   </section>
   </> 
  )
}

export default Signup
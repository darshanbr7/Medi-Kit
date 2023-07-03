import React from 'react'
import "./Account.css"
import Address from "../Address/Address"
import {useNavigate} from "react-router-dom"
const Account = () => {
  const navigate=useNavigate()
  const logoutHandler=()=>{
    localStorage.removeItem("token")
    alert("logout sucessfully")
    navigate("/login")
  }
  return (
    <React.Fragment>
      <div className='parent'>
        <div className='main'>
        <div className='child' onClick={()=>{navigate("/address")}}>Account</div>
        </div>
        <div className='main'>
        <div className='child'>Wishlist</div>
        </div>
        <div className='main'>
        <div className='child'>Orders</div>
        </div>
        <div className='main'>
        <div className='child-n' onClick={logoutHandler}>Logout</div>
        </div>
      </div>
  
    </React.Fragment>
  )
}

export default Account
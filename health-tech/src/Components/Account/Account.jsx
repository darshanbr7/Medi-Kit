import React, { useEffect, useState } from 'react'
import "./Account.css"
import { useNavigate} from "react-router-dom"
import axiosInstance from '../AxiosInstance/AxiosInstance'

export const userContext=React.createContext()
const Account = () => {
  const[detail,setDetail]=useState([])
  const[address,setAddress]=React.useState("")
  const[city,setCity]=React.useState("")
  const[state,setState]=React.useState("")
  const[phno,setPhno]=React.useState("")
  const[pincode,setpincode]=React.useState("")
  const navigate=useNavigate()
  const logoutHandler=()=>{
    localStorage.removeItem("token")
    alert("logout sucessfully")
    navigate("/login")
  }
  useEffect(()=>{
      axiosInstance.get(`http://localhost:3090/api/account`)
                    .then((response)=>{
                      setDetail(response.data)
                    })
                    .catch((error)=>{
                      console.log(error);
                    })
  },[])
  const formData={
    "address": address,
    "city": city,
    "state": state,
    "pincode": pincode,
    "phNumber": phno 
  }
  const submithandler=(e)=>{
    e.preventDefault()
   axiosInstance.post(`http://localhost:3090/api/add/address`,formData)
                .then((res)=>{
                  console.log(res);
                })
                .catch((err)=>{
                  console.log(err);
                })
  }

  return (
    <React.Fragment>
      <userContext.Provider value={detail._id}>
      <div className='parent'>
        <div className='main'>
        <div className='child' onClick={()=>{navigate("/delivery")}}>Account</div>
        </div>
        <div className='main'>
        <div className='child' onClick={()=>{navigate("/wishlist")}}>Wishlist</div>
        </div>
        <div className='main'>
        <div className='child'>Orders</div>
        </div>
        <div className='main'>
        <div className='child-n' onClick={logoutHandler}>Logout</div>
        </div>
      </div>
      <div className='page'>
      <div className='card'>
        <form onSubmit={submithandler} >
          <h3>Hello <span>{detail.name}</span></h3>
          <div className="form-group">
            <label >Email :</label>
            <input type="text"  value={detail.email} className='form-control' disabled/>
          </div>
          <div className="form-group">
            <label >Address :</label>
            <textarea  rows={2} cols={40} value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label >City / Town :</label>
            <input type="text"   className='form-control' value={city} onChange={(e)=>{setCity(e.target.value)}} />
          </div>
          <div className="form-group">
            <label >State :</label>
            <input type="text"   className='form-control' value={state} onChange={(e)=>{setState(e.target.value)}} />
          </div>
          <div className="form-group">
            <label >Ph:</label>
            <input type="text"   className='form-control'  value={phno} onChange={(e)=>{setPhno(e.target.value)}}/>
          </div>
          <div className="form-group">
            <label >Zip code :</label>
            <input type="text"   className='form-control'  min={6} max={6} value={pincode} onChange={(e)=>{setpincode(e.target.value)}}/>
          </div>
          <button className='btn btn-primary'>
            Add Address
          </button>
        </form>
      </div>
        </div>
        </userContext.Provider>
    </React.Fragment>
  )
}

export default Account
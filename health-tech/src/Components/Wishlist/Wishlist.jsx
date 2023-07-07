import React, { useEffect } from 'react'
import "./Wishlist.css"
import axiosInstance from "../AxiosInstance/AxiosInstance"

const Wishlist = () => {
    const [products,setProducts]=React.useState([])
    useEffect(()=>{
      axiosInstance.get("http://localhost:3090/api/get/cartitems")
                    .then((response)=>{
                      let result=response.data
                      if(result.hasOwnProperty("error")){
                        alert(result.error)
                      }else{
                        setProducts(result)
                      }
                    })
                    .catch((err)=>{
                      console.log(err)
                    })
    },[])
  return (
    <div>
      {
        products.length===0? <p style={{color:"red"}}>Your Cart is empty</p>:<></>
      }
    </div>
  )
}

export default Wishlist
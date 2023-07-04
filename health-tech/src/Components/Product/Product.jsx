import React, { useEffect } from 'react'
import {BiRupee} from "react-icons/bi"
import "./Product.css"
import axios from "axios"
import axiosInstance from "../AxiosInstance/AxiosInstance"
const Product = () => {
    const[product,setProduct]=React.useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3090/api/all/medicine`)
                .then((response)=>{
                    setProduct(response.data)                   
                })
                .catch((err)=>{
                    console.log(err);
                })
    },[])
  return (
    <React.Fragment>
        <div id='search'>
            <input type='search'/>
            <button className='button'>Search</button>
        </div>
        <div>
        {
          product.map((ele,index)=>{
            return (<div key={index} className='product'>
                <div>
                    <img src={ele.avatar} height={158} width={150} alt=' not found'/>
                </div>
                <div className='name'>
                  <h3>{ele.name}</h3>
                </div>
                <div className='price'>
                <h3>  <BiRupee size={21}/> :  {ele.price}</h3>
             </div>
               {
                ele.type==="Tablet"?<p className='tab'>/per 10 Tablet</p>:<></>
               }
                      <div className='cart' onClick={()=>{
                                                      axiosInstance.post("http://localhost:3090/api/add/cart",{
                                                                          "name":ele.name,
                                                                          "avatar":ele.avatar,
                                                                          "price":ele.price
                                                                        })
                                                                        .then((response)=>{
                                                                          let result=response.data
                                                                          if(result.hasOwnProperty("error")){
                                                                            alert("Item already added")
                                                                          }else{
                                                                            alert("Item added Succesfully")
                                                                          }
                                                                        })
                                                                        .catch((err)=>{
                                                                          console.log(err);
                                                                        })

                }}>Cart</div>
                <div className='buy'>Buy</div>
                 </div>)
          })
        }
        </div>
    </React.Fragment>
  )
}

export default Product
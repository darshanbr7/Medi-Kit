import React from 'react'
import {BiRupee} from "react-icons/bi"
import axiosInstance from "../AxiosInstance/AxiosInstance"
import {useNavigate} from "react-router-dom"
const Products = ({medicine=[]}) => {
    const navigate=useNavigate()
  return (
    <div>
    {
      medicine.map((ele,index)=>{
        return (<div key={index} className='product'>
            <div>
                <img src={ele.avatar} height={158} width={150} alt=' not found'/>
            </div>
            <div className='p-name'>
              <h3>{ele.name}</h3>
            </div>
            <div className='p-price'>
            <h3>  <BiRupee size={21}/> :  {ele.price}</h3>
         </div>
           {
            ele.type==="Tablet"?<p className='tab'>/per 10 Tablet</p>:<></>
           }
                  <div className='cart' onClick={()=>{
                                                  axiosInstance.post("http://localhost:3090/api/add/cart",{
                                                                      "medicine":ele._id
                                                                    })
                                                                    .then((response)=>{
                                                                      let result=response.data
                                                                      if(result.hasOwnProperty("error")){
                                                                        alert(result.message)
                                                                      }else{
                                                                        if(result.message){
                                                                          navigate("/login")
                                                                        }else{
                                                                        alert("Item added Succesfully")
                                                                        }
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
  )
}

export default Products
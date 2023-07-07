import React, { useEffect } from 'react'
import "./Product.css"
import axios from "axios"

import Search from './Search'
import Products from './Products'
const Product = () => {
    const[product,setProduct]=React.useState([])
    
    const [keyword, setKeyword] =React.useState('');
    const [medicine, setMedicine] = React.useState(product)

    const fetchProduct=async()=>{
      try{
        let result= await axios.get(`http://localhost:3090/api/all/medicine`)
        setProduct(result.data)
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
       fetchProduct()
    },[])
    const updateKeyword=(keyword)=>{
      if(keyword===""){
        setMedicine(product)
       setKeyword(keyword);

      }else{
      const filterBySearch = product.filter((item) => {
          return item.name.toLowerCase().includes(keyword.toLowerCase())
          
       })
       setKeyword(keyword);
       setMedicine(filterBySearch);
      }
  }

   
  
  return (
    <React.Fragment>
        <div className='p-search'>
        <Search keyword={keyword} onChange={updateKeyword} />
        </div>
        <Products  medicine={medicine}/>
       
    </React.Fragment>
  )
}

export default Product
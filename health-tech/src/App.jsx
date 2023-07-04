import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Account from './Components/Account/Account'
import PrivateRoutes from './Components/PrivateRoute/PrivateRoutes'
import Delivery from './Components/Address/Delivery'
import Product from './Components/Product/Product'
import Wishlist from './Components/Wishlist/Wishlist'
const App = () => {
  return (
    <div>
      
      <Navbar/>
     <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path='/account' element={<Account/>}  exact/>
            <Route path='/delivery' element={<Delivery/>}  exact/>
            <Route path='/wishlist' element={<Wishlist/>}  exact/>
        </Route>

        <Route path='/' element={<Home/>} exact />
        <Route path='/login' element={<Login/>} exact />
        <Route path='/signup' element={<Signup/>}  exact/>
        <Route path='/product' element={<Product/>}  exact/>
        
        </Routes>
        
      
     

    </div>
  )
}

export default App
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Signup from './Components/Signup/Signup'
import Account from './Components/Account/Account'
import PrivateRoutes from './Components/PrivateRoute/PrivateRoutes'
const App = () => {
  return (
    <div>
      
      <Navbar/>
     <Routes>
        <Route element={<PrivateRoutes/>}>
            <Route path='/account' element={Account} />
        </Route>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        
        </Routes>
        
      
     

    </div>
  )
}

export default App
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Home from './Home/Home'
import Signup from './Signup/Signup'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
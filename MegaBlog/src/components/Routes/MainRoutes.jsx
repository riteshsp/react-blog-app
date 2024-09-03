import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../Login' 
import SignUp from '../SignUp'
import Home from '../Home/Home'

function MainRoutes() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
)
}

export default MainRoutes;
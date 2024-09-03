import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
// import { Provider } from 'react-redux'
import {Header,Footer}  from './components'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './components/Routes/MainRoutes'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])


  return !loading?(
    <>
    <BrowserRouter>
     <MainRoutes/>
      <Header/>
      <Footer/>
    </BrowserRouter>
    </>
  ):null;
    
  
}

export default App

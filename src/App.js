import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/UserPage/HomePage'
import Login from './auths/Login'
import SignUp from './auths/SignUp'
import UserRoute from './components/UserRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  return (
    <>
    <Routes>
        <Route path='/'  element={<RootLayOut/>} >
          <Route index element={<HomePage />} />

        </Route>
        <Route element={<UserRoute />}>

          <Route path="user/Login" element={<Login />} />
          <Route path="user/SignUp" element={<SignUp />} />
        </Route>
        
       
      </Routes>
      
     
     
     <ToastContainer autoClose={1000} position='top-right' />
     
      
    </>
  )
}

export default App

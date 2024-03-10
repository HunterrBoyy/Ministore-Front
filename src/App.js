import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auths/Login'
import SignUp from './auths/SignUp'
import UserRoute from './components/UserRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'


const App = () => {

  return (
    <>
    <Routes>
          <Route index element={<Header />} />
          

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

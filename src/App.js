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
          <Route path='/' index element={<Header />} />
          

        <Route element={<UserRoute />}>

          <Route path="user/Login" element={<Login />} />
          <Route path="user/SignUp" element={<SignUp />} />
        </Route>

        {/* <Route element={<RouteUser />}>
            <Route path='user/cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
            <Route path='/user/checkout' element={<OrderPage />} />
            <Route path='/user/profile' element={<UserProfile />} />
            <Route path='/user/order/:id' element={<OrderDetail />} />
          </Route> */}

       
      </Routes>
      
     
     
     <ToastContainer autoClose={1000} position='top-right' />
     
      
    </>
  )
}

export default App

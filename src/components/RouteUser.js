import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const RouteUser = () => {
  const {user} = useSelector((store)=> store.user);
  return user === null ? <Navigate to='/' replace={true}/> : <Outlet />
}

export default RouteUser

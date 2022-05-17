import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import Login from '../pages/Login'

export default function PrivateRoute (props) {

    const { isLogged }= useAuth()
    
    

  return (

    isLogged() ? <Outlet /> :  <Login />

  )
}

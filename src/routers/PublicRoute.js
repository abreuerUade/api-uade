import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'

export default function PublicRoute(props) {
  
    const {isLogged} = useAuth()
    
    if (isLogged()) return <Navigate to='/home' />

  return (

    <Route {...props} /> 

  )
}

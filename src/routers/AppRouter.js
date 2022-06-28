import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import FullRecipe from '../pages/FullRecipe';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MyAccount from '../pages/MyAccount';
import RecipieManager from '../pages/RecipieManager';
import ForgotPassword from '../pages/ForgotPassword';
import ForgotPasswordSuccess from '../pages/ForgotPasswordSuccess';
import PrivateRoute from './PrivateRoute';

function AppRouter() {

  const location = useLocation()
	const data = location.state

  return (
    <Routes>
        
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/forgotpasswordsuccess' element={<ForgotPasswordSuccess />} />
        
        <Route element={<PrivateRoute />}>
          <Route path='/Account' element={<MyAccount settingsOption='ProfileInformation'  />} /> 
          <Route path='/profileinfo' element={<MyAccount  settingsOption='ProfileInformation'/>} />
          <Route path='/notification' element={<MyAccount  settingsOption='Notification'/>} />
          <Route path='/security' element={<MyAccount  settingsOption='Security'/>} />
          <Route path='/help' element={<MyAccount  settingsOption='Help'/>} />
          <Route path='/about' element={<MyAccount  settingsOption='About'/>} />
          <Route path='/fullrecipeId:recipieId' element={<FullRecipe receta={data}  />} />
          <Route path='/recipeManager' element={<RecipieManager />} />
          
        </Route>
      
      </Routes>
  )
}

export default AppRouter
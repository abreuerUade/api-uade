import './App.css';
import { Route, Routes } from 'react-router-dom';
import FullRecipe from './pages/FullRecipe';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import MyRecipes from './pages/MyRecipes';
import users from './users';
import recetas from './recetas.js';
import images from './images.js';
import Security from './pages/settings/Security';


import { useLocation } from 'react-router-dom';

function App() {
  
  const currentUser = users[1]

  const userName = currentUser.firstName + ' ' + currentUser.lastName
  const userPic = currentUser.profPic
  
  const location = useLocation()
  const data = location.state
  const item = recetas[0]
  const allImages= images[0]

  return (
   
      <Routes>
        
        <Route path='/' element={<Welcome fullUser={currentUser} receta={item} images={allImages} />} />
        <Route path='/home' element={<Home userName={userName} pic={userPic}  />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipe' element={<FullRecipe userName={userName} pic={userPic} receta={item}  />} />
        <Route path='/myAccount' element={<MyAccount fullUser={currentUser} />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
        <Route path='/welcome' element={<Welcome fullUser={currentUser} receta={item} images={allImages} />} />
        <Route path='/profileinfo' element={<MyAccount fullUser={currentUser} settingsOption='ProfileInformation'/>} />
        <Route path='/notification' element={<MyAccount fullUser={currentUser} settingsOption='Notification'/>} />
        <Route path='/security' element={<MyAccount fullUser={currentUser} settingsOption='Security'/>} />
        <Route path='/help' element={<MyAccount fullUser={currentUser} settingsOption='Help'/>} />
        <Route path='/about' element={<MyAccount fullUser={currentUser} settingsOption='About'/>} />

      </Routes>

   

    
  );
}

export default App;

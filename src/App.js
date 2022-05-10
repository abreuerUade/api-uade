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
import images from './images.js';
import { useLocation } from 'react-router-dom';
import RecipieManager from './pages/RecipieManager';

function App() {
  
  const currentUser = users[0]

  const userName = currentUser.firstName + ' ' + currentUser.lastName
  const userPic = currentUser.profPic
  

  const location = useLocation()
  const data = location.state
  
  const urlId = data===null ? "" : data.item.id
  
  
  const allImages= images[0]

  return (
   
      <Routes>
        
        <Route path='/' element={<Welcome fullUser={currentUser} images={allImages} />} />
        <Route path='/home' element={<Home userName={userName} pic={userPic}  />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path={`/fullrecipeId=${urlId}`} element={<FullRecipe userName={userName} pic={userPic} receta={data}  />} />
        <Route path='/myAccount' element={<MyAccount settingsOption='ProfileInformation' fullUser={currentUser} />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
        <Route path='/welcome' element={<Welcome fullUser={currentUser} images={allImages} />} />
        <Route path='/profileinfo' element={<MyAccount fullUser={currentUser} settingsOption='ProfileInformation'/>} />
        <Route path='/notification' element={<MyAccount fullUser={currentUser} settingsOption='Notification'/>} />
        <Route path='/security' element={<MyAccount fullUser={currentUser} settingsOption='Security'/>} />
        <Route path='/help' element={<MyAccount fullUser={currentUser} settingsOption='Help'/>} />
        <Route path='/about' element={<MyAccount fullUser={currentUser} settingsOption='About'/>} />
        <Route path='/recipeManager' element={<RecipieManager userName={userName} pic={userPic} />} />
      </Routes>

   

    
  );
}

export default App;

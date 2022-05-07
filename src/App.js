
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
import { useLocation } from 'react-router-dom';

function App() {
  
  const currentUser = users[1]

  const userName = currentUser.firstName + ' ' + currentUser.lastName
  const userPic = currentUser.profPic
  
  const location = useLocation()
  const data = location.state
  const item = recetas[0]
  const receta = recetas[0]

  return (
   
      <Routes>
        
        <Route path='/' element={<Home userName={userName} pic={userPic}/>} />
        <Route path='/home' element={<Home userName={userName} pic={userPic}  />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipe' element={<FullRecipe userName={userName} pic={userPic} receta={item}  />} />
        <Route path='/MyAccount' element={<MyAccount fullUser={currentUser} />} />
        <Route path='/myrecipes' element={<MyRecipes />} />
        <Route path='/Welcome' element={<Welcome fullUser={currentUser} />} />
        

      </Routes>

   

    
  );
}

export default App;

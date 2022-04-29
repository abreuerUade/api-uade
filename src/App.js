
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FullRecipie from './pages/FullRecipie';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import MyRecipies from './pages/MyRecipies';
import users from './users';
import { useLocation } from 'react-router-dom';

function App() {
  
  const currentUser = users[0]

  
  const location = useLocation()
  const data = location.state
  

  return (
   
      <Routes>
        
        <Route path='/' element={<Home user={currentUser} />} />
        <Route path='/home' element={<Home user={currentUser}  />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipie' element={<FullRecipie user={currentUser} receta={data}  />} />
        <Route path='/MyAccount' element={<MyAccount user={currentUser} />} />
        <Route path='/myrecipies' element={<MyRecipies />} />
        

      </Routes>

   

    
  );
}

export default App;

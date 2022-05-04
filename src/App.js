
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
  
  const currentUser = users[1]

  const userName = currentUser.firstName + ' ' + currentUser.lastName
  const userPic = currentUser.profPic
  
  const location = useLocation()
  const data = location.state
  

  return (
   
      <Routes>
        
        <Route path='/' element={<Home userName={userName} pic={userPic}/>} />
        <Route path='/home' element={<Home userName={userName} pic={userPic}  />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipie' element={<FullRecipie userName={userName} pic={userPic} receta={data}  />} />
        <Route path='/MyAccount' element={<MyAccount userName={userName} pic={userPic} />} />
        <Route path='/myrecipies' element={<MyRecipies />} />
        

      </Routes>

   

    
  );
}

export default App;

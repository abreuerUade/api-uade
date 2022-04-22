
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullRecipie from './pages/FullRecipie';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyAccount from './pages/MyAccount';
import MyRecipies from './pages/MyRecipies';
import users from './users';


function App() {
  
  const currentUser = users[0]

  return (
   <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipie' element={<FullRecipie/>} />
        <Route path='/MyAccount' element={<MyAccount user={currentUser} />} />
        <Route path='/myrecipies' element={<MyRecipies />} />

      </Routes>

   </BrowserRouter>

    
  );
}

export default App;

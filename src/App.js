
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullRecipie from './pages/FullRecipie';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import MyRecipies from './pages/MyRecipies';


function App() {
  
  return (
   <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/fullrecipie' element={<FullRecipie/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/myrecipies' element={<MyRecipies />} />
      </Routes>

   </BrowserRouter>

    
  );
}

export default App;

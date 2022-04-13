
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullRecipie from './pages/FullRecipie';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {
  return (
   <BrowserRouter>
      <div><Navbar /></div>
      <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/fullrecipie' element={<FullRecipie/>} />
            <Route path='/profile' element={<Profile/>} />
      </Routes>
      


   </BrowserRouter>

    
  );
}

export default App;

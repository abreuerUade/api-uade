
import { Box } from '@mui/material';
import './App.css';
import FullRecipie from './components/FullRecipie';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <h1>Holitas</h1>
      <Login></Login>
      <Signup></Signup>
      <Home></Home>
      <FullRecipie></FullRecipie>
    </Box>
  );
}

export default App;

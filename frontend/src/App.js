import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Footer from './components/Footer';
import TC from './components/TC';
import ScoreBoard from './pages/ScoreBoard';

import './index.css';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className='min-h-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/scoreboard' element={<ScoreBoard />} />
          <Route path='/tc' element={<TC />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resetpassword/*' element={<ResetPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

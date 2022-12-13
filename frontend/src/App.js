import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Footer from './components/Footer';
import TC from './components/TC';
import ScoreBoard from './pages/ScoreBoard';

import './index.css';

function App() {
  return (
    <div className='min-h-screen'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/scoreboard' element={<ScoreBoard />} />
          <Route path='/tc' element={<TC />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

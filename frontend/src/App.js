import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Footer from './components/Footer';
import TC from './components/TC';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/tc' element={<TC />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

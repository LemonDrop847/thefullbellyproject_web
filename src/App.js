// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

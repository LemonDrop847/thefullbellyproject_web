// import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

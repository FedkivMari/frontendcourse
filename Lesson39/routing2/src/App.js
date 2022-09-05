import {Routes, Route, Link} from 'react-router-dom';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<Contactus/>} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [link, setLink] = useState(1);
  return (
    <div className="App">
      <Router>
        <Navbar link={link} setLink={setLink} />
        <Routes>
          <Route exact path="/" element={<Home  link={link} setLink={setLink} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

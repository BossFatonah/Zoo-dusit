import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Componants/Login';
import './Componants/Login.css';
import Home from './Componants/Home';




function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<header />} />
      </Routes>
    </Router>
  );
}

export default App;

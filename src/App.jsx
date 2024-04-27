import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Componants/Login';
import './Componants/Login.css';
import Home from './Componants/Home';
import LandAnimals from './Pages/LandAnimals';
import Poultry from './Pages/Poultry';
import AquaticAnimals from './Pages/AquaticAnimals';
import Map from './Pages/Map';
import About from './Pages/About';
import Navbar from './Componants/Navbar/Navbar';




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;

// <Router>
//   <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/home/landAnimals" element={<LandAnimals />} />
//     <Route path="/home/landAnimals/poultry" element={<Poultry />} />
//     <Route path="/home/landAnimals/poultry/aquaticAnimals" element={<AquaticAnimals />} />
//     <Route path="/home/landAnimals/poultry/aquaticAnimals/map" element={<Map />} />
//     <Route path="/home/landAnimals/poultry/aquaticAnimals/map/about" element={<About />} />
//   </Routes>
// </Router>
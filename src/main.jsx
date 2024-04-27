import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Componants/Login';
import Home from './Componants/Home';
import AquaticAnimals from './Pages/AquaticAnimals';
import LandAnimals from './Pages/LandAnimals';
import Poultry from './Pages/Poultry';
import Map from './Pages/Map';
import About from './Pages/About';

const router = [
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/aquaticAnimals",
    element: <AquaticAnimals />
  },
  {
    path: "/landAnimals",
    element: <LandAnimals />
  },
  {
    path: "/poultry",
    element: <Poultry />
  },
  {
    path: "/map",
    element: <Map />
  },
  {
    path: "/about",
    element: <About />
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);

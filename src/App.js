import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router";
import Home from './Home';
import PiePagina from './PiePagina';
import Habitaciones from './Habitaciones';
import Contacto from './Contacto';
import Ubicacion from './Ubicacion'
import { Toolbar } from '@mui/material';
import NavTabs from './NavTabs';

function App() {
  return (
    <>
    
      <BrowserRouter>
      
      <Toolbar/>
      <NavTabs>
        <Link to="/">Home</Link> | {" "}
        <Link to="/habitaciones">Habitaciones</Link> | {" "}
        <Link to="/ubicacion">Ubicación</Link> | {" "}
        <Link to="/contacto">Contacto</Link> 
      </NavTabs>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
    <PiePagina/>
    </>
  );
}

export default App;


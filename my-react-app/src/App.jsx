import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Detalle from "./pages/Detalle.jsx"
import Listado from "./pages/Listado.jsx"
import './App.css'


function App() {

  return <div>
  

      <Routes>
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />
      </Routes>

      <nav>
        <ul>
          <li>
            <Link to="/">Ir al inicio</Link>
          </li>
          <li>
            <Link to="/listado">Ir a contacto</Link>
          </li>
          <li>
            <Link to="/detalle">Ir al formulario de contacto</Link>
          </li>
        </ul>
      </nav>
    </div>

 
}

export default App

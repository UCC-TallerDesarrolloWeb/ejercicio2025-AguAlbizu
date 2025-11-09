import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Login from './login.jsx';
import Activities from './activities.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/actividades' element={<Activities/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

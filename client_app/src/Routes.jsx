import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './sesion/login/login';
import Registration from './sesion/registration/registration'; 

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default Rutas;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login';
import Inicio from './componentes/principal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Usuarios from './componentes/usuarios';
import Informe from './componentes/informe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/usuario" element={<Usuarios />} />
        <Route path='/informe' element={<Informe/>} />
      </Routes>
    </Router>
  );
}

export default App;

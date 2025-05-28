import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Usuarios from '../../views/Usuarios';
import Productos from '../../views/Productos';
import Inicio from '../../views/Inicio';
import Footer from '../footer/Footer';

export default function MainRout() {
    return (
        <Router>
  
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/productos" element={<Productos />} />
            </Routes>
          <Footer />
        </Router>
      );
   
  
}

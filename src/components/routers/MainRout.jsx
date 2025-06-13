import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UsuariosPage from "../usuarios/UsuariosPage";
import ProductosPage from "../productos/ProductosPage";
import Inicio from "../inicio/Inicio";
import NotFound from "../notfound/NotFound";
import ProductoDetalle from "../productos/productoDetalle/ProductoDetalle";
import AgregarProducto from "../productos/agregarProducto/AgregarProducto";
import Layout from "../ui/layouts/Layout";

export default function MainRout() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />{" "}
        <Route path="/nuevoproducto" element={<AgregarProducto />} />{" "}
        {/* Ruta dinámica */}
        <Route path="*" element={<NotFound />} /> {/* Ruta para el error 404 */}
      </Routes>
    </Router>
  );
}

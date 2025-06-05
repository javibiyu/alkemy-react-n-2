import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";
import Layout from "../layouts/Layout";
import UsuariosPage from "../usuarios/UsuariosPage";
import ProductosPage from "../productos/ProductosPage";
import Inicio from "../inicio/Inicio";
import NotFound from "../notfound/NotFound";
import ProductoDetalle from "../productos/productoDetalle/ProductoDetalle";

export default function MainRout() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />{" "}
        {/* Ruta dinámica */}
        <Route path="*" element={<NotFound />} /> {/* Ruta para el error 404 */}
      </Routes>
      <Footer />
    </Router>
  );
}

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";
import Layout from "../layouts/Layout";
import UsuariosPage from "../usuarios/UsuariosPage";
import ProductosPage from "../productos/ProductosPage";
import Inicio from "../inicio/Inicio";

export default function MainRout() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<UsuariosPage />} />
        <Route path="/productos" element={<ProductosPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

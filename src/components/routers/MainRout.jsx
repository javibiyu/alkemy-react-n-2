import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";
import Layout from "../layouts/Layout";
import Usuarios from "../usuarios/Usuarios";
import Productos from "../productos/Productos";
import Inicio from "../inicio/Inicio";

export default function MainRout() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

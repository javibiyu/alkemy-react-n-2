import Footer from "../footer/Footer";
import Navbar from "../../navBar/NavBar";
import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <Navbar />

      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        {/* Ajusta 120px según la altura de tu header y footer */}
        {children}
      </div>

      <Footer />
    </>
  );
}

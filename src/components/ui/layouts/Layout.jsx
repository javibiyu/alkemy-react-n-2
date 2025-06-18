import Footer from "../footer/Footer";
import Navbar from "../../navBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1100,
          background: "#212121", // gris oscuro
        }}
      >
        <Navbar />
      </div>
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        {/* Ajusta 120px según la altura de tu header y footer */}
        {children}
      </div>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          zIndex: 1100,
          background: "#212121", // gris oscuro
          color: "#fafafa", // color de texto claro
        }}
      >
        <Footer />
      </div>
    </>
  );
}

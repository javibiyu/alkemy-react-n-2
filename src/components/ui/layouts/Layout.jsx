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
          paddingBottom: 2, // padding inferior de 2px
        }}
      >
        <Navbar />
      </div>
      <div>{children}</div>
      <div
        style={{
          position: "sticky",
          bottom: 0,
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

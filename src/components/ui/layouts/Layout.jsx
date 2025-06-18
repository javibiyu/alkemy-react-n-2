import Footer from "../footer/Footer";
import Navbar from "../../navBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "75.4vh" }}>{children}</div>
      <Footer />
    </>
  );
}

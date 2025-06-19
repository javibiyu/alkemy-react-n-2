export default function Footer() {
  return (
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
      <footer className="w-full bg-gray-900 text-white py-4 mt-8">
        <hr
          className="border-gray-700 mb-5 mt-0"
          style={{ marginTop: "5px" }}
        />
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} Cosme Fulanito. Todos los derechos
          reservados.
        </div>
      </footer>
    </div>
  );
}

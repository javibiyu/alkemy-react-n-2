export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-8">
      <hr className="border-gray-700 mb-5 mt-0" style={{ marginTop: "5px" }} />
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} Cosme Fulanito. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

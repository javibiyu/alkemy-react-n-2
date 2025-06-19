import { render, screen, fireEvent, waitFor } from "@testing-library/react";

git import ProductosPage from "../../components/productos/ProductosPage";

// Mock de componentes hijos
jest.mock("./agregarProducto/AgregarProducto", () => ({ productos }) => (
  <button onClick={() => productos({ id: 999, name: "Nuevo Producto" })}>
    MockAgregarProducto
  </button>
));
jest.mock("./producto/Producto", () => ({ product }) => (
  <div>{product.name}</div>
));
jest.mock("../filtro/filtro", () => () => <div>MockFiltro</div>);
jest.mock("../ui/loading/Loading", () => () => <div>Loading...</div>);

describe("ProductosPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("muestra loading mientras carga", () => {
    jest.spyOn(useCrudApiHook, "default").mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    render(<ProductosPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("muestra error si hay error", () => {
    jest.spyOn(useCrudApiHook, "default").mockReturnValue({
      data: [],
      loading: false,
      error: { message: "Error de red" },
    });
    render(<ProductosPage />);
    expect(screen.getByText(/error: error de red/i)).toBeInTheDocument();
  });

  it("muestra productos y permite agregar uno", async () => {
    jest.spyOn(useCrudApiHook, "default").mockReturnValue({
      data: [
        { id: 1, name: "Producto 1" },
        { id: 2, name: "Producto 2" },
      ],
      loading: false,
      error: null,
    });
    render(<ProductosPage />);
    expect(screen.getByText("Producto 1")).toBeInTheDocument();
    expect(screen.getByText("Producto 2")).toBeInTheDocument();

    // Mostrar formulario de agregar producto
    fireEvent.click(screen.getByText(/agregar producto/i));
    expect(screen.getByText("MockAgregarProducto")).toBeInTheDocument();

    // Simular agregar producto
    fireEvent.click(screen.getByText("MockAgregarProducto"));
    await waitFor(() =>
      expect(screen.getByText("Nuevo Producto")).toBeInTheDocument()
    );
  });
});

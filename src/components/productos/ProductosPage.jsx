import { useEffect, useState } from "react";
import { Box, Grid, Container, Button, Typography } from "@mui/material";

import Producto from "./producto/Producto";
import Filtro from "../filtro/filtro";
import AgregarProducto from "./agregarProducto/AgregarProducto";
import useCrudApi from "../../hooks/useCrudApi/useCrudApi";
import { BASE_URL } from "../../constantes/urls";
import Loading from "../loading/Loading";

export default function ProductosPage() {
  const [mostrarAgregar, setMostrarAgregar] = useState(false);
  const [products, setProducts] = useState([]);
  const {
    data: productos,
    loading,
    error,
  } = useCrudApi(`${BASE_URL}/products`);

  useEffect(() => {
    setProducts(productos);
  }, [productos]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }
  const addProduct = (prouct) => {
    setProducts((prevProducts) => [...prevProducts, prouct]);
  };
  return (
    <Container fixed>
      <>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Filtro />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5">Lista de Productos</Typography>
          {/* inicio agrego producto*/}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setMostrarAgregar(!mostrarAgregar)}
          >
            {mostrarAgregar ? "Cerrar Formulario" : "Agregar Producto"}
          </Button>
        </Box>
        {mostrarAgregar && (
          <Box sx={{ mb: 4 }}>
            <AgregarProducto productos={addProduct} />
          </Box>
        )}
        {/* fin agregar producto */}
        <Box lg={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products &&
              products.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                  <Producto product={product} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </>
    </Container>
  );
}

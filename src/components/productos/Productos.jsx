import { Box, Grid, Container } from "@mui/material";

import ProductosApi from "../../api/ProductosApi";
import Product from "./Product";
import Filtro from "../filtro/filtro";

const Productos = () => {
  const { productos, loading, error } = ProductosApi();
  console.log("Productos:", productos);
  return (
    <Container fixed>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error.message}</p>}
      {!loading && !error && (
        <Box sx={{ mt: 2, mb: 2 }}>
          <Filtro />
        </Box>
      )}
      <Box lg={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {productos.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Productos;

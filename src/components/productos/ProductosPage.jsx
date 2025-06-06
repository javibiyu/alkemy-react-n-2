import { Box, Grid, Container } from "@mui/material";

import Producto from "./producto/Producto";
import Filtro from "../filtro/filtro";
import useCrudApi from "../../hooks/useCrudApi/useCrudApi";
import { BASE_URL } from "../../constantes/urls";
import Loading from "../loading/Loading";

export default function ProductosPage() {
  const {
    data: productos,
    loading,
    error,
  } = useCrudApi(`${BASE_URL}/products`);

  if (loading) return <Loading />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container fixed>
      <>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Filtro />
        </Box>
        <Box lg={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {productos.map((product) => (
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

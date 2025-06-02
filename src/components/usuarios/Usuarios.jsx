import UsuariosApi from "../../api/UsuariosApi";
import Filtro from "../filtro/filtro";
import User from "./User";
import { Box, Container, Divider, Grid } from "@mui/material";

export default function Usuarios() {
  const { usuarios, loading, error } = UsuariosApi();
  return (
    <Container fixed>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error al cargar usuarios: {error.message}</p>}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Filtro />
      </Box>
      <Divider />
      <Box lg={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {usuarios.map((user) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
              <User user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

import { useState, useMemo, useEffect } from "react";
import UsuariosApi from "../../api/UsuariosApi";
import Filtro from "../filtro/filtro";
import User from "./usuario/Ususario";
import { Box, Container, Grid, Typography } from "@mui/material";
import Loading from "../ui/loading/Loading";

export default function UsuariosPage() {
  const { usuarios, loading, error } = UsuariosApi();
  const [filteredUser, setFilteredUser] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setFilteredUser(usuarios);
    setUser(usuarios);
  }, [usuarios]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  return (
    <Container fixed>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Filtro
          colection={user}
          field={["name.firstname", "name.lastname"]}
          onFiltrar={setFilteredUser}
        />
      </Box>

      <Box lg={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {filteredUser.length === 0 ? (
            <Grid item xs={12}>
              <Typography>No se encontraron usuarios.</Typography>
            </Grid>
          ) : (
            filteredUser.map((user) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={user.id}>
                <User user={user} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
}

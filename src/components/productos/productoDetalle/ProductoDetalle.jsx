import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import ProductosApi from "../../../api/ProductosApi";

export default function ProductoDetalle() {
  const { id } = useParams(); // Obtener el parámetro dinámico de la URL
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const { productos, loading, error } = ProductosApi(id);

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Card sx={{ maxWidth: 600, margin: "20px auto", padding: "16px" }}>
      <CardMedia
        component="img"
        height="300"
        image={productos.image}
        alt={productos.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {productos.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {productos.description}
        </Typography>
        <Typography variant="h6" color="primary">
          Precio: ${productos.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Categoría: {productos.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calificación: {productos.rating?.rate} / 5 ({productos.rating?.count}{" "}
          reseñas)
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={() => navigate("/productos")} // Navegar de regreso a ProductosPage
        >
          Volver
        </Button>
      </CardContent>
    </Card>
  );
}

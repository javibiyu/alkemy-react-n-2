import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Producto({ product }) {
  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            color: "#fff",
            fontSize: 14,
            backgroundColor: "#1976d2",
            padding: "8px 16px",
            borderRadius: "4px",
            display: "block",
            mb: 2,
          }}
          variant="h5"
          component="h2"
          className="text-2xl font-bold mb-2"
        >
          {product.title}
        </Typography>
        <CardMedia
          sx={{
            height: 140,
            objectFit: "contain",
            mb: 2,
          }}
          component="img"
          image={product.image}
          title={product.title}
        />
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {product.description}
        </Typography>
        <Button
          component={Link}
          to={`/producto/${product.id}`} // Ruta dinámica con el id del producto
          variant="contained"
          color="primary"
        >
          Ver Detalle
        </Button>
      </CardContent>
    </Card>
  );
}

import { useEffect, useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

import Loading from "../../loading/Loading";
import { BASE_URL } from "../../../constantes/urls";
import useCrudApi from "../../../hooks/useCrudApi/useCrudApi";

export default function AgregarProducto({ productos }) {
  const [producto, setProducto] = useState({
    id: 0,
    title: "",
    price: 0.1,
    description: "",
    category: "",
    image: "http://example.com",
  });

  const [submit, setSubmit] = useState(false);
  const [url, setUrl] = useState(null);
  const [method, setMethod] = useState(null);
  const [body, setBody] = useState(null);

  const { data, loading, error } = useCrudApi(url, method, body);

  useEffect(() => {
    if (submit) {
      setUrl(`${BASE_URL}/products`);
      setMethod("POST");
      setBody(producto);
      setSubmit(false); // Reset submit to prevent re-triggering
    }
  }, [submit, producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  if (loading) return <Loading />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;
  if (data) {
    // Agregar el nuevo producto a la lista de productos
    productos.push(data);
    console.log("Producto agregado:", productos);
  }
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Agregar Producto
      </Typography>
      <TextField
        label="Título"
        name="title"
        value={producto.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Precio"
        name="price"
        type="number"
        value={producto.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descripción"
        name="description"
        value={producto.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Categoría"
        name="category"
        value={producto.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Imagen (URL)"
        name="image"
        value={producto.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Agregar Producto
      </Button>
    </Box>
  );
}

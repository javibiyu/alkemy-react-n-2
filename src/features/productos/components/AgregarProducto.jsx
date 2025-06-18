import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import Loading from "../../../components/ui/loading/Loading";
import { BASE_URL } from "../../../constantes/urls";
import useCrudApi from "../../../hooks/useCrudApi";

const initialProducto = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
};

export default function AgregarProducto({ productos }) {
  const [producto, setProducto] = useState(initialProducto);

  const [submit, setSubmit] = useState(false);
  const [url, setUrl] = useState(null);
  const [method, setMethod] = useState(null);
  const [body, setBody] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

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
  useEffect(() => {
    if (data) {
      productos(data);
      setNotification({
        open: true,
        message: "Producto agregado exitosamente",
        severity: "success",
      });
      setProducto(initialProducto); // Reiniciar campos después de agregar
      console.log("Producto agregado:", data);
    }
  }, [data]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Typography color="error">Error: {error.message}</Typography>;
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
        placeholder="Ingrese el título del producto"
        required
      />

      <NumericFormat
        label="Precio"
        name="price"
        value={producto.price}
        onChange={handleChange}
        customInput={TextField}
        placeholder="Ingrese el precio del producto"
        decimalSeparator=","
        valueIsNumericString
        prefix="$"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Descripción"
        name="description"
        value={producto.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        placeholder="Ingrese una descripción del producto"
        required
      />
      <TextField
        label="Categoría"
        name="category"
        value={producto.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
        placeholder="Ingrese la categoría del producto"
        required
      />
      <TextField
        label="Imagen (URL)"
        name="image"
        value={producto.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
        placeholder="Ingrese la URL de la imagen del producto"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Agregar Producto
      </Button>
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={() => setNotification({ ...notification, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setNotification({ ...notification, open: false })}
          severity={notification.severity}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

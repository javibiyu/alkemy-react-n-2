import { TextField } from "@mui/material";

export default function Filtro({ colection, field, onFiltrar }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const filtrados = colection?.filter((item) => {
      return item[field]?.toLowerCase().includes(value.toLowerCase());
    });
    onFiltrar(filtrados); // Llama a la función pasada por props
  };

  return (
    <TextField
      fullWidth
      id="buscar-basic"
      label="Buscar"
      variant="standard"
      onChange={handleChange}
    />
  );
}

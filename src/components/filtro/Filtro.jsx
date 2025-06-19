import { TextField } from "@mui/material";

export default function Filtro({ colection, field }) {
  const handleChange = (event) => {
    const value = event.target.value;
    const filtrados = colection?.filter((item) => {
      return item[field]?.toLowerCase().includes(value.toLowerCase());
    });
    console.log(filtrados);
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

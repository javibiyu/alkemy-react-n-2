import { TextField } from "@mui/material";

// Obtiene el valor anidado usando una ruta tipo "name.firstname"
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export default function Filtro({ colection, field, onFiltrar }) {
  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const fields = Array.isArray(field) ? field : [field];
    const filtrados = colection?.filter((item) => {
      return fields.some((f) => {
        const fieldValue = getNestedValue(item, f);
        return (
          typeof fieldValue === "string" &&
          fieldValue.toLowerCase().includes(value)
        );
      });
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

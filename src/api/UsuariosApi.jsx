import { useEffect, useState } from "react";
import axios from "axios";

export default function useUsuariosApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Cargando usuarios desde la API...");
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        console.log("Usuarios cargados:", response.data);
        setUsuarios(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { usuarios, loading, error };
}

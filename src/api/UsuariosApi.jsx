import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/urls";

export default function UsuariosApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users`)
      .then((response) => {
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

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/urls";

export default function ProductosApi(id) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    !id &&
      axios
        .get(`${BASE_URL}/products`)
        .then((response) => {
          setProductos(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
  }, []);

  useEffect(() => {
    id &&
      axios
        .get(`${BASE_URL}/products/${id}`)
        .then((response) => {
          console.log("Producto:", response.data);
          setProductos(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
  }, [id]);

  return { productos, loading, error };
}

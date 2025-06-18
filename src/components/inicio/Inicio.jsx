import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const Inicio = () => {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  const bgColor = isDark ? "#181818" : "#f5f5f5";
  const primaryText = isDark ? "#fafafa" : "#212121";
  const secondaryText = isDark ? "#bdbdbd" : "#424242";
  const cardBg = isDark ? "#232323" : "#fff";
  const border = isDark ? "1px solid #333" : "1px solid #e0e0e0";

  return (
    <div
      style={{
        textAlign: "center",
        color: secondaryText,
        marginTop: 24,
        background: bgColor,
        borderRadius: 12,
        padding: 24,
        boxShadow: isDark
          ? "0 2px 8px rgba(0,0,0,0.5)"
          : "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <h1 style={{ color: primaryText }}>Inicio</h1>
      <p style={{ color: secondaryText }}>Bienvenido a la página de inicio.</p>
      <h2 style={{ color: primaryText, marginTop: 32 }}>
        Bienvenido a la mejor tienda online de ropa
      </h2>
      <p
        style={{
          margin: "16px 0 24px 0",
          fontSize: "1.1rem",
          color: secondaryText,
        }}
      >
        Descubre las últimas tendencias en moda para todas las edades y estilos.
        Compra fácil, rápido y seguro.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80"
          alt="Ropa 1"
          style={{
            width: 140,
            height: 140,
            objectFit: "cover",
            borderRadius: 8,
            background: cardBg,
            border,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80"
          alt="Ropa 2"
          style={{
            width: 140,
            height: 140,
            objectFit: "cover",
            borderRadius: 8,
            background: cardBg,
            border,
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80"
          alt="Ropa 3"
          style={{
            width: 140,
            height: 140,
            objectFit: "cover",
            borderRadius: 8,
            background: cardBg,
            border,
            objectPosition: "top center", // Arregla el encuadre de la imagen
          }}
        />
      </div>
    </div>
  );
};

export default Inicio;

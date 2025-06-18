import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setUserCount(120); // Simulado
    setProductCount(45); // Simulado
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "1rem",
          minWidth: 150,
        }}
      >
        <h3>Usuarios</h3>
        <p style={{ fontSize: 32, margin: 0 }}>{userCount}</p>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "1rem",
          minWidth: 150,
        }}
      >
        <h3>Productos</h3>
        <p style={{ fontSize: 32, margin: 0 }}>{productCount}</p>
      </div>
    </div>
  );
};

export default Dashboard;

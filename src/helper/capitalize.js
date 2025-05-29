// Función para capitalizar la primera letra de una palabra
const capitalize = (str) =>
  str && typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : "";

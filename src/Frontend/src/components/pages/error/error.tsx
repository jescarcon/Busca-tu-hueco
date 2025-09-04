import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Página no encontrada</h2>
        <p className="error-text">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <button className="error-btn" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./footer.css"; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Acerca de</h4>
          <p>Tu proyecto de reservas de espacios.</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Registro</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@tudominio.com</p>
          <p>Tel: +34 123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tu Proyecto. Todos los derechos reservados.
      </div>
    </footer>
  );
}

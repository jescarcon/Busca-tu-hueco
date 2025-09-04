import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contáctanos</h1>
        <p>
          ¿Quieres trabajar con nosotros o saber más sobre lo que hacemos?
          Escríbenos y te responderemos en breve.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Tu correo" required />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              placeholder="Tu mensaje"
              required
              maxLength={1000}
              rows={5}
            />
            <small>Máx. 1000 caracteres.</small>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>
    </div>
  );
}

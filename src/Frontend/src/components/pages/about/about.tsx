import React from "react";
import "./About.css";

// 👇 Aquí importas tus imágenes (pon las rutas correctas en /assets o donde las tengas)
import heroImg from "/images/about/headquarters.jpg";
import missionImg from "/images/about/mision.jpg";
import visionImg from "/images/about/vision.jpg";
import valuesImg from "/images/about/valores.png";
import team1 from "/images/about/hombre1.jpg";
import team2 from "/images/about/mujer1.jpg";
import team3 from "/images/about/hombre2.jpg";
import team4 from "/images/about/mujer2.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Quiénes Somos</h1>
          <p>
            Un equipo apasionado creando soluciones innovadoras para mejorar la
            vida de las personas.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="about-mission">
        <h2>Nuestra Filosofía</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <img src={missionImg} alt="Misión" />
            <h3>Misión</h3>
            <p>
              Desarrollar proyectos digitales que generen impacto positivo en
              las comunidades, acercando la tecnología a las personas.
            </p>
          </div>
          <div className="mission-card">
            <img src={visionImg} alt="Visión" />
            <h3>Visión</h3>
            <p>
              Ser referentes en innovación y sostenibilidad, construyendo un
              futuro más conectado y responsable.
            </p>
          </div>
          <div className="mission-card">
            <img src={valuesImg} alt="Valores" />
            <h3>Valores</h3>
            <p>
              Pasión, transparencia y compromiso son los pilares que guían cada
              uno de nuestros proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="about-team">
        <h2>Nuestro Equipo</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={team1} alt="Persona 1" />
            <h3>Juan Pérez</h3>
            <p>CEO & Fundador</p>
          </div>
          <div className="team-card">
            <img src={team2} alt="Persona 2" />
            <h3>María López</h3>
            <p>CTO & Innovación</p>
          </div>
          <div className="team-card">
            <img src={team3} alt="Persona 3" />
            <h3>Carlos Ruiz</h3>
            <p>Desarrollador Fullstack</p>
          </div>
          <div className="team-card">
            <img src={team4} alt="Persona 4" />
            <h3>Lucía Gómez</h3>
            <p>Diseñadora UX/UI</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="about-contact">
        <h2>Contáctanos</h2>
        <p>
          ¿Quieres trabajar con nosotros o saber más sobre lo que hacemos?
          Escríbenos y te responderemos en breve.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

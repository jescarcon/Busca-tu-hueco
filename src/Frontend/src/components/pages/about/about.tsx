import React from "react";
import "./About.css";

import heroImg from "/images/about/headquarters.jpg";
import missionImg from "/images/about/mision.jpg";
import visionImg from "/images/about/vision.jpg";
import valuesImg from "/images/about/valores.png";

import team1 from "/images/about/hombre1.jpg";
import team2 from "/images/about/mujer1.jpg";
import team3 from "/images/about/hombre2.jpg";
import team4 from "/images/about/mujer2.jpg";

import partner1 from "/images/about/partner1.jpg";
import partner2 from "/images/about/partner2.jpg";
import partner3 from "/images/about/partner3.jpg";

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

      {/* Filosofía */}
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

      {/* Historia */}
      <section className="about-history">
        <h2>Nuestra Historia</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2018</span>
            <p>Nació la idea en un pequeño coworking con solo 3 personas.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2020</span>
            <p>Lanzamos nuestro primer producto y conseguimos los primeros 100 clientes.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2022</span>
            <p>Expansión internacional con oficinas en 3 países.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>Más de 1M de usuarios confían en nuestras soluciones.</p>
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

      {/* Cifras */}
      <section className="about-stats">
        <h2>Impacto en Números</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>+1M</h3>
            <p>Usuarios</p>
          </div>
          <div className="stat-card">
            <h3>15</h3>
            <p>Países</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Proyectos</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Pasión</p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="about-partners">
        <h2>Nuestros Socios</h2>
        <div className="partners-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
        </div>
      </section>
    </div>
  );
}

import React from "react";
import "./profile.css";

import avatarImg from "/images/about/hombre1.jpg"; // reemplaza con tu avatar

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Cabecera */}
        <section className="profile-header">
          <img src={avatarImg} alt="Avatar" className="profile-avatar" />
          <div className="profile-info">
            <h1>Juan Pérez</h1>
            <p>juan.perez@email.com</p>
            <span>Usuario desde 2022</span>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="profile-stats">
          <div className="stat-card">
            <h3>15</h3>
            <p>Proyectos</p>
          </div>
          <div className="stat-card">
            <h3>1M+</h3>
            <p>Usuarios impactados</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Conexiones</p>
          </div>
        </section>

        {/* Acciones */}
        <section className="profile-actions">
          <button className="action-btn">Editar perfil</button>
        </section>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./profile.css";
import avatarImg from "/images/about/hombre1.jpg"; // Avatar por defecto
import Modal from "../../utils/modal/modal";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState<string | null>(avatarImg);

  // Manejar cambio de archivo y previsualización
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Cabecera */}
        <section className="profile-header">
          <img src={previewImg || avatarImg} alt="Avatar" className="profile-avatar" />
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
          <button className="action-btn" onClick={() => setIsModalOpen(true)}>
            Editar perfil
          </button>
        </section>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content-inner">
          <h2>Editar Perfil</h2>
          <form>
            <label>Nombre:</label>
            <input type="text" placeholder="Juan Pérez" />

            <label>Email:</label>
            <input type="email" placeholder="juan.perez@email.com" />

            <label>Nueva Contraseña:</label>
            <input type="password" placeholder="••••••••" />

            <label>Imagen de perfil:</label>
            <label className="file-upload-btn">
              Seleccionar imagen
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            {previewImg && (
              <div className="image-preview">
                <img src={previewImg} alt="Previsualización" />
              </div>
            )}


            <div className="modal-btns">
              <button type="submit" className="action-btn">
                Guardar cambios
              </button>
              <button type="button" className="logout-btn" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

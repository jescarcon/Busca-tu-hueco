import { useNavigate } from 'react-router-dom';
import logo from '/images/home/logo.png';
import './navbar.css';
import { useAuth } from '../authContext/authContext';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string("Email inválido"),
  password: z.string().min(1, "Contraseña obligatoria"),
});

type LoginFormData = z.infer<typeof loginSchema>;


function CustomNavbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const { login } = useAuth(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };






  const goToRegister = () => {
    navigate('/registro');
  };

  const goToProfile = () => {
    navigate('/perfil'); // 👈 o a donde quieras que vaya el perfil
  };

  return (
    <div className='CustomNavbar-container'>
      {/* Logo */}
      <div className='CustomNavbar-logo-container'>
        <img src={logo} alt='logo.png' className='CustomNavbar-logo-image' />
      </div>

      {/* Navegación */}
      <div className="CustomNavbar-navbar-container">
        <a href="/" className="CustomNavbar-link CustomNavbar-link-inicio">Inicio</a>
        <a href="/comunidades" className="CustomNavbar-link CustomNavbar-link-comunidades">Comunidades</a>
        <a href="/playas" className="CustomNavbar-link CustomNavbar-link-playas">Playas</a>
        <a href="/contacto" className="CustomNavbar-link CustomNavbar-link-contacto">Contacto</a>

        {/* Dropdown Acceder / Mi cuenta */}
        <div className="CustomNavbar-login-dropdown">
          <button className="CustomNavbar-login-button">
            {isAuthenticated ? 'Mi cuenta' : 'Acceder'}
          </button>

          <div className="CustomNavbar-login-form">
            {isAuthenticated ? (
              <div className="CustomNavbar-form">
                <button onClick={goToProfile} className="CustomNavbar-profile-button">
                  Mi perfil
                </button>
                <button onClick={logout} className="CustomNavbar-logout-button">
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <>
                <form className="CustomNavbar-form" onSubmit={handleSubmit(onSubmit)}>
                  <input className="CustomNavbar-input-email" type="email" required placeholder="Correo"  {...register("email")}  autoComplete="off" />

                  <input  className="CustomNavbar-input-password" type="password" placeholder="Contraseña" required {...register("password")}  autoComplete="off" />
                  
                  <button type="submit" className="CustomNavbar-submit-button"> Iniciar Sesión </button>
                </form>

                <div className="CustomNavbar-login-links">
                  <a href="/forgot-password" className="CustomNavbar-link-forgot">
                    ¿Olvidaste tu contraseña?
                  </a>
                  <a
                    href="/registro"
                    className="CustomNavbar-link-register"
                    onClick={goToRegister}
                  >
                    ¿No tienes cuenta? Regístrate
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomNavbar;

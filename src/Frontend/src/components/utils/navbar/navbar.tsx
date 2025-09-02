import { useNavigate } from 'react-router-dom';
import logo from '/images/home/logo.png';
import './navbar.css';

function CustomNavbar() {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/register');
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

                {/* Dropdown Acceder */}
                <div className="CustomNavbar-login-dropdown">
                    <button className="CustomNavbar-login-button">Acceder ▼</button>
                    <div className="CustomNavbar-login-form">
                        <form onSubmit={(e) => { e.preventDefault(); console.log('Login'); }} className="CustomNavbar-form">
                            <input type="email" placeholder="Correo" required className="CustomNavbar-input-email" />
                            <input type="password" placeholder="Contraseña" required className="CustomNavbar-input-password" />
                            <button type="submit" className="CustomNavbar-submit-button">Iniciar Sesión</button>
                        </form>
                        <div className="CustomNavbar-login-links">
                            <a href="/forgot-password" className="CustomNavbar-link-forgot">¿Olvidaste tu contraseña?</a>
                            <a href="/register" className="CustomNavbar-link-register" onClick={goToRegister}>¿No tienes cuenta? Regístrate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomNavbar;

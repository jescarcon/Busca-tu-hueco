import "./footer.css";
import facebook from "/images/home/facebook.png";
import git from "/images/home/git.png";
import instagram from "/images/home/instagram.png";
import twitter from "/images/home/twitter.png";

export function CustomFooter() {
  return (
    <div className='footer-component'>
      <footer className="footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              className="footer-logo"
            />
            <span className="footer-brand-name">Busca tu Hueco</span>
          </div>

          {/* Navigation Links */}
          <ul className="footer-links">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter / X">
              <img src={twitter} alt="Twitter / X" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
              <img src={git} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Busca tu Hueco. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

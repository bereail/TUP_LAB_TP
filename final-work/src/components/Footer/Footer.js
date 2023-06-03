import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>informacion</h3>
                    <p>Telefono: 123456</p>
                    <p>Mail: utn@hotmail.com</p>
                    <p>Direccion: Calle falsa 123</p>
                </div>
                <div className="footer-section">
                <h3>Enlaces utiles</h3>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/libros">Libros</a>
                        </li>
                        <li>
                            <a href="/contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Siguenos</h3>
                    <div className="social-media">
                    <a href="https://www.facebook.com/bibliotecavirtual" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/bibliotecavirtual" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/bibliotecavirtual" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
        <p>&copy; 2023 Biblioteca Virtual. Todos los derechos reservados.</p>
      </div>

        </div>
    )
}

export default Footer;
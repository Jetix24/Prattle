import React from 'react';

export default function Home() {
  return (
      <section>
        <input type="checkbox" id="check" />
        <header>
          <img src="/img/logo_blanc.png" id="logo" alt="Logo" />
          <div className="navigation">
            <a href="#poyecto">Proyecto</a>
            <a href="#nosotros">Sobre nosotros</a>
            <a href="#">Iniciar sesión</a>
            <a href="#">Registrate</a>
          </div>
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars menu-btn"></i>
            <i className="fas fa-times close-btn"></i>
          </label>
        </header>

        <div className="content">
          <div className="info">
            <h2>Añade esa <span>chispa</span> a la conversación</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="registro.html" className="info-btn">Comienza ahora</a>
          </div>
        </div>
      </section>

  );
}

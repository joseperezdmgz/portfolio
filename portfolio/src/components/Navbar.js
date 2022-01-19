function About() {
  return (
    <>
      <nav className="navbar" id="header">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="#header">Inicio</a>
          </li>
          <li className="navbar-li">
            <a href="#about-me">Sobre mí</a>
          </li>
          <li className="navbar-li">
            {" "}
            <a href="#jobs">Trabajos</a>
          </li>
          <li className="navbar-li">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default About;

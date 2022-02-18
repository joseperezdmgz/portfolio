import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { RiDownload2Fill } from "react-icons/ri";

function About() {
  return (
    <>
      <div>
        <div>
          <img className="about-img" src="foto.jpeg" alt="fotoperfil" />
        </div>
        <h1 className="name">Jose Pérez Domínguez</h1>
        <h2>Developer</h2>
        <div className="contact">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/joseperezdmgz"
            target="blank"
          >
            <AiFillLinkedin className="contact-logo" />
          </a>
          <a
            className="contact-link"
            href="https://github.com/joseperezdmgz"
            target="blank"
          >
            <AiFillGithub className="contact-logo" />
          </a>
          <a className="contact-link" href="mailto:joseperezdmgz@gmail.com">
            <AiOutlineMail className="contact-logo" />
          </a>
          <a className="contact-link" href="CV-Jose-Perez_Dev.pdf" download>
            <RiDownload2Fill className="contact-logo" />
          </a>
        </div>
        <h3 className="nav" id="about-me">
          Sobre mí
        </h3>
      </div>
      <p className="about-text">
        Actualmente estoy en busca activa de empleo. Soy una persona
        autodidacta, siempre dispuesto a aprender. Tengo un alto sentido de la
        responsabilidad y estoy habituado al trabajo en equipo y bajo presión.
      </p>
      <p className="about-text">
        Por otro lado, soy muy aficionado al deporte. He practicado fútbol ⚽️
        durante más de 20 años y, actualmente, formo parte de la directiva de un
        equipo local. También disfruto de las salidas en bici 🚴.
      </p>
    </>
  );
}

export default About;

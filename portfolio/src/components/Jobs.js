import { AiFillGithub, AiOutlineRightCircle } from "react-icons/ai";

function Jobs() {
  return (
    <div className="jobs" id="jobs">
      <h3 className="nav">Trabajos</h3>
      <div className="jobs-container">
        <div className="job">
          <h4 className="job-tittle">Old is Gold</h4>
          <p className="job-description">
            Página web de venta de artículos retro entre usuarios
          </p>
          <div className="job-links">
            <a
              className="job-link"
              href="https://github.com/joseperezdmgz/Proyecto-OldIsGold"
              target="blank"
            >
              <AiFillGithub className="contact-logo" />
            </a>
            <a
              className="job-link"
              href="https://vimeo.com/678697607"
              target="blank"
            >
              <AiOutlineRightCircle className="contact-logo" />
            </a>
          </div>
        </div>
        <div className="job">
          <h4 className="job-tittle">App calculadora de resultado</h4>
          <p className="job-description">
            App que calcula las victorias y derrotas que lleva un equipo de
            fútbol en la temporada. Hecha para uso en un juego de fútbol online.
          </p>
          <div className="job-links">
            <a
              className="job-link"
              href="https://github.com/joseperezdmgz/App-calcular-resultados"
              target="blank"
            >
              <AiFillGithub className="contact-logo" />
            </a>
            <a
              className="job-link"
              href="https://resultadosapp.netlify.app/"
              target="blank"
            >
              <AiOutlineRightCircle className="contact-logo" />
            </a>
          </div>
        </div>
        <div className="job">
          <h4 className="job-tittle">Api con Angular</h4>
          <p className="job-description">
            Aplicación para Recursos Humanos con datos de una Api.
            <br /> Te logueas con esta cuenta:
            <br />
            eve.holt@reqres.in
            <br />
          </p>
          <div className="job-links">
            <a
              className="job-link"
              href="https://github.com/joseperezdmgz/my-app"
              target="blank"
            >
              <AiFillGithub className="contact-logo" />
            </a>
            <a
              className="job-link"
              href="https://prueba-angular.netlify.app/"
              target="blank"
            >
              <AiOutlineRightCircle className="contact-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobs;

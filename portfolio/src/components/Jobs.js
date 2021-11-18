import { AiFillGithub, AiOutlineRightCircle } from "react-icons/ai";

function Jobs() {
  return (
    <div className="jobs">
      <h3 className="nav">Jobs</h3>
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
              href="https://www.linkedin.com/posts/joseperezdmgz_quer%C3%ADa-compartir-con-ustedes-el-fruto-de-activity-6778630548676984832-tFlW"
              target="blank"
            >
              <AiOutlineRightCircle className="contact-logo" />
            </a>
          </div>
        </div>
        <div className="job">
          <h4 className="job-tittle">Mudanzas</h4>
          <p className="job-description">
            Página para negocio local de mudanzas.
          </p>
          <div className="job-links">
            <a
              className="job-link"
              href="https://github.com/joseperezdmgz/mudanzas"
              target="blank"
            >
              <AiFillGithub className="contact-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Jobs;

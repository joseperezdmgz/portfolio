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
              href="https://dms.licdn.com/playlist/C5605AQGU5FOrTq5LGw/mp4-640p-30fp-crf28/0/1616149263339?e=1642633200&v=beta&t=I0ZSRcAKagI2p2eaVGxiVJ8bXW14JZb3k0KzqBFr5pE"
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

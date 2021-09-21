import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { RiDownload2Fill } from "react-icons/ri";

function Contact() {
  return (
    <>
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
        <a
          className="contact-link"
          href="https://drive.google.com/file/d/1qKXNLvNki_b-je0K-8DpWH8a2JMsplFO/view?usp=sharing"
          target="blank"
        >
          <RiDownload2Fill className="contact-logo" />
        </a>
      </div>
    </>
  );
}

export default Contact;

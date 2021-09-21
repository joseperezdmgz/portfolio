import Contact from "./Contact";

function About() {
  return (
    <>
      <div>
        <div>
          <img
            className="about-img"
            src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
          />
        </div>
        <h2 className="name">Hola, soy</h2>
        <h1 className="name">Jose Pérez Domínguez</h1>
        <Contact />
        <h3 className="nav">Sobre mi</h3>
      </div>
      <p className="about-text">
        Soy Desarrollador web. <br />
        Mi experiencia actual es formativa, pero con mucho trabajo y dedicación
        he conseguido grandes conocimientos en React y Node. Estoy actualmente
        en busca activa de trabajo para poder demostrar estos conocimientos y
        poder aportar en un producto digital de éxito.
      </p>
    </>
  );
}

export default About;

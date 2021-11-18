import Contact from "./Contact";

function About() {
  return (
    <>
      <div>
        <div>
          <img className="about-img" src="foto.jpeg" />
        </div>
        <h2>Hola, soy</h2>
        <h1 className="name">Jose Pérez Domínguez</h1>
        <Contact />
        <h3 className="nav">Sobre mi</h3>
      </div>
      <p className="about-text">Soy Desarrollador web.</p>
      <p className="about-text">
        Mi experiencia actual es formativa, pero con mucho trabajo y dedicación
        he conseguido grandes conocimientos en React y Node. Estoy actualmente
        en busca activa de trabajo para poder demostrar estos conocimientos y
        poder aportar en un producto digital de éxito.
      </p>
      <p className="about-text">
        Por otro lado, soy muy aficionado al deporte. He practicado FÚTBOL ⚽️
        durante más de 20 años y, actualmente, formo parte de la directiva de un
        equipo local. También disfruto de las salidas en bicicleta 🚴.
      </p>
    </>
  );
}

export default About;

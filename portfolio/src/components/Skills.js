function Skills() {
  return (
    <div className="skills" id="skills">
      <h3 className="nav">Habilidades</h3>

      <ul>
        <p className="skills-tittle">Desarrollo Front-end</p>
        <div className="skills-front">
          <li>
            <img
              className="skills-img"
              alt="html"
              src="./logos/html-logo.png"
            />
            <p className="skill-name">HTML</p>
          </li>
          <li>
            <img className="skills-img" alt="css" src="./logos/css-logo.png" />
            <p className="skill-name">CSS</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="react"
              src="./logos/react-logo.png"
            />
            <p className="skill-name">React</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="angular"
              src="./logos/angular-logo.png"
            />
            <p className="skill-name">Angular</p>
          </li>
          <li>
            <img className="skills-img" alt="js" src="./logos/js-logo.png" />
            <p className="skill-name">JS</p>
          </li>
        </div>
      </ul>

      <ul>
        <p className="skills-tittle">Desarrollo Back-end</p>
        <div className="skills-back">
          <li>
            <img className="skills-img" alt="api" src="./logos/api-logo.png" />
            <p className="skill-name">API REST</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="node"
              src="./logos/node-logo.png"
            />
            <p className="skill-name">Node.js</p>
          </li>
          <li>
            <img className="skills-img" alt="php" src="./logos/php-logo.png" />
            <p className="skill-name">PHP</p>
          </li>
          <li>
            <img className="skills-img" alt="SQL" src="./logos/sql-logo.png" />
            <p className="skill-name">SQL</p>
          </li>
        </div>
      </ul>

      <ul>
        <p className="skills-tittle">Otras</p>
        <div className="skills-other">
          <li>
            <img className="skills-img" alt="Git" src="./logos/git-logo.png" />
            <p className="skill-name">GIT</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="Gitlab"
              src="./logos/gitlab-logo.png"
            />
            <p className="skill-name">Gitlab</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="VSCode"
              src="./logos/vsCode-logo.png"
            />
            <p className="skill-name">Visual Studio Code</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="postman"
              src="./logos/postman-logo.png"
            />
            <p className="skill-name">Postman</p>
          </li>
          <li>
            <img
              className="skills-img"
              alt="terminal"
              src="./logos/terminal-logo.png"
            />
            <p className="skill-name">Terminal</p>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Skills;

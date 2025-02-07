import { useState } from "react";
import CollapseMenu from "../../components/CollapseMenu";
import { posts } from "../../constants/db.js";
import Banner from "../../layouts/Banner";
import banner from "/assets/img/banner-projects.png";
import fluxo from "/assets/img/fluxograma.png";
import "./Projects.css";

export default function Projects() {
  const [item] = useState(posts[1]);

  return (
    <div className="projetos">
      <Banner img={banner} titulo="NOSSOS PROJETOS" />
      <div className="post">
        <h2>A Casa de Acolhimento</h2>
        <p>{item.texto}</p>
        <h3>Fluxo do Processo da Casa de Acolhimento </h3>
        <img src={fluxo} alt="fluxograma da casa de acolhimento amor e vida" />
        <h3>
          Detalhamento do Processo <br></br>da Casa de Acolhimento
        </h3>
      </div>
      <div className="collapse">
        <CollapseMenu />
      </div>
    </div>
  );
}

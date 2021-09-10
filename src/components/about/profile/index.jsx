import React from 'react';
import '../About.css';

class Profile extends React.Component {
  render() { 
    return (
      <div className="objectives">
        <div className="obj-item perfil">
          <h1>Perfil Pessoal</h1>
          <p>Sou estudante de Desenvolvimento de Software Fullstack, na Trybe. Possuo 10 meses de experiência em desenvolvimento front-end e back-end, com conhecimentos em HTML, CSS, JavaScrip, React, Redux, NodeJs, MongoDB e MySQL. Estou em busca de novas oportunidades de emprego.</p>
        </div>
        <div className="obj-item professional">
          <h1>Objetivo Profissional</h1>
          <p>Aplicar minha formação como fullstack no desenvolvimento de soluções críticas.</p>
          <p>Aprimorar minhas noções de liderança e trabalho em equipe, projetando uma futura posição gerencial.</p>
          <p>Desenvolver minha carreira sob a supervisão e estímulo de uma empresa comprometida com a inovação.</p>
        </div>
      </div>
    );
  }
}
 
export default Profile;
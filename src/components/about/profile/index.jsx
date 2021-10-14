import React from 'react';
import ola from '../../../images/ola.png';
import computador from '../../../images/computador.png';
import '../About.css';

class Profile extends React.Component {
  render() { 
    return (
      <div className="objectives">
        <div className='container'>
          <h1>Perfil Pessoal</h1>
          <div className="obj-item perfil">
            <img className='avatar ola' src={ola} alt="avatar-ola" />
            <p>Sou estudante de Desenvolvimento de Software Fullstack, na Trybe. Possuo 10 meses de experiência em desenvolvimento front-end e back-end, com conhecimentos em HTML, CSS, JavaScrip, React, Redux, NodeJs, MongoDB e MySQL. Estou em busca de novas oportunidades de emprego.</p>
          </div>
        </div>
        <div className='container'>
          <h1>Objetivo Profissional</h1>
          <div className="obj-item professional">
            <img className='avatar pc' src={computador} alt="avatar-pc" />
            <p>Aplicar minha formação como fullstack no desenvolvimento de soluções críticas. Aprimorar minhas noções de liderança e trabalho em equipe, projetando uma futura posição gerencial. Desenvolver minha carreira sob a supervisão e estímulo de uma empresa comprometida com a inovação.</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Profile;
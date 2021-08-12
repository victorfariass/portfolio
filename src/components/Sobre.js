import React from 'react';
import profile from '../images/profile.jpg';
import instagram from '../images/instagram-logo.png';
import facebook from '../images/facebook-logo.png';
import github from '../images/github-logo.png';
import linkedin from '../images/linkedin-logo.png';
import './Sobre.css';

class Sobre extends React.Component {
  render() { 
    return (
      <section className="about-container">
        <div className="about">
          <img src={profile} alt="Imagem de Perfil" className="profile-image" width="130px" />
          <div className="info">
            <h1 className="name">Victor Farias</h1>
            <p className="item">victorfarias.tv@gmail.com</p>
            <p className="item">(11)94388-9879</p>
            <p className="item">São Paulo - SP</p>
          </div>
        </div>
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
        <div className="logos-container">
          <a href="https://www.linkedin.com/in/victorfariasdev/" target="_blanck">
            <img src={linkedin} alt="Logo Linkedin" className="logo" width="35px" />
          </a>
          <a href="https://github.com/victorfariass" target="_blanck">
            <img src={github} alt="Logo GitHub" className="logo" width="35px" />
          </a>
          <a href="https://www.instagram.com/victorfariasdev/" target="_blanck">
            <img src={instagram} alt="Logo Instagram" className="logo" width="35px" />
          </a>
          <a href="https://www.facebook.com/victorfariasdev/" target="_blanck">
            <img src={facebook} alt="Logo Facebook" className="logo" width="35px" />
          </a>
          
        </div>
      </section>
    );
  }
}
 
export default Sobre;
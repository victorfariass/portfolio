import React from "react";
import avatarImages from '../images/avatar';

export default function About() {
  return (
    <div className='flex about-container'>
      <div className='flex item-container'>
        <div className='flex item'>
          <img src={avatarImages.ola} alt="avatar-ola" />
          <div>
            <h1>Perfil Pessoal</h1>
            <p>Sou estudante de Desenvolvimento de Software Fullstack, na Trybe. Possuo 10 meses de experiência em desenvolvimento front-end e back-end, com conhecimentos em HTML, CSS, JavaScrip, React, Redux, NodeJs, MongoDB e MySQL. Estou em busca de novas oportunidades de emprego.</p>
          </div>
        </div>
      </div>
      <div className='flex item-container'>
        <div className='flex item objective'>
          <img src={avatarImages.computador} alt="avatar-pc" />
          <div>
            <h1>Objetivo Profissional</h1>
            <p>Aplicar minha formação como fullstack no desenvolvimento de soluções críticas. Aprimorar minhas noções de liderança e trabalho em equipe, projetando uma futura posição gerencial. Desenvolver minha carreira sob a supervisão e estímulo de uma empresa comprometida com a inovação.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
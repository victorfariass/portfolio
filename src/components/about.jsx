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
            <p>Sou ex estudante de Comunicação Social e gostava muito de escrever e produzir conteúdos que despertassem algum sentimento no telespectador, que de alguma forma gerasse impacto pra quem estivesse assistindo. Porém não foi um mercado que me agradou muito, optei por mudar de área e comecei a aprender desenvolvimento. Hoje sou formado no curso de Desenvolvimento de Software na @Trybe!</p>
          </div>
        </div>
      </div>
      <div className='flex item-container'>
        <div className='flex item objective'>
          <img src={avatarImages.computador} alt="avatar-pc" />
          <div>
            <h1>Objetivo Profissional</h1>
            <p>Quero continuar melhorando e gerando impacto na vida das pessoas, dessa vez usando todas as ferramentas que a tecnologia fornece, desenvolvendo soluções e aplicações criativas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
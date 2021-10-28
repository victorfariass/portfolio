import React from "react";
import avatarImages from '../images/avatar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  margin-bottom: 50px;
`

const Objectives = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  margin-bottom: 50px;
`

const Image = styled.img`
  height: 220px;
  -webkit-filter: drop-shadow(5px 5px 5px rgb(255, 255, 255));
  filter: drop-shadow(1px 1px 2px rgb(255, 254, 255));
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 20px;
`

const Parag = styled.p`
  font-size: 16px;
  width: 26vw;
  text-align: justify;
`

export default function About() {
  return (
    <Container>
      <Profile>
        <Image src={avatarImages.ola} alt="avatar-ola" />
        <div>
          <Title>Perfil Pessoal</Title>
          <Parag>Sou ex estudante de Comunicação Social e gostava muito de escrever e produzir conteúdos que despertassem algum sentimento no telespectador, que de alguma forma gerasse impacto pra quem estivesse assistindo. Porém não foi um mercado que me agradou muito, optei por mudar de área e comecei a aprender desenvolvimento. Hoje sou formado no curso de Desenvolvimento de Software na @Trybe!</Parag>
        </div>
      </Profile>
      <Objectives>
        <Image src={avatarImages.computador} alt="avatar-pc" />
        <div>
          <Title>Objetivo Profissional</Title>
          <Parag>Quero continuar melhorando e gerando impacto na vida das pessoas, dessa vez usando todas as ferramentas que a tecnologia fornece, desenvolvendo soluções e aplicações criativas.</Parag>
        </div>
      </Objectives>
    </Container>
  )
}
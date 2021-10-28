import React from 'react';
import avatarImages from '../images/avatar';
import SocialMedia from './socialMedia';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const Image = styled.img`
  border-radius: 30%;
  height: 180px;
  margin-right: 30px
`

const Info = styled.div`
  flex-direction: column;
  align-items: center;
`

export default function Profile(){
  return (
    <Container>
      <Image src={avatarImages.profile} alt="Imagem de Perfil" />
      <Info>
        <h1>Victor Farias</h1>
        <p>victorfarias.tv@gmail.com</p>
        <p>(11)94388-9879</p>
        <p>São Paulo - SP</p>
        <SocialMedia />
      </Info>
    </Container>
  )
}
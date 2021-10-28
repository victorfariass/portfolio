import React from 'react';
import socialImages from '../images/socialMedia';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Logo = styled.img`
  filter: invert(99%) sepia(10%) saturate(2%) hue-rotate(309deg) brightness(117%) contrast(100%);
  margin-right: 20px;
  width: 30px;
  &:hover {
    transform: scale(1.3);
  }
`

export default function SocialMedia(){
  return (
    <Container>
      <a
        href="https://www.linkedin.com/in/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <Logo src={socialImages.linkedin} alt="logo-linkedin" />
      </a>
      <a
        href="https://github.com/victorfariass"
        target='_blank'
        rel="noreferrer"
      >
        <Logo src={socialImages.github} alt="logo-github" />
      </a>
      <a
        href="https://www.instagram.com/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <Logo src={socialImages.instagram} alt="logo-instagram" />
      </a>
      <a
        href="https://www.facebook.com/victorfariasdev"
        target='_blank'
        rel="noreferrer"
      >
        <Logo src={socialImages.facebook} alt="logo-facebook" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5511943889879"
        target='_blank'
        rel="noreferrer"
      >
        <Logo src={socialImages.whatsapp} alt="logo-whatsapp" />
      </a>
    </Container>
  )
}
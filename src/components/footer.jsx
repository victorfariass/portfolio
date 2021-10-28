import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: #575757;
  margin-top: 20px;
  text-align: center;
`

const Text = styled.h4`
  padding: 15px;
  margin: 0;
  color: #ffffff;
  font-size: 16px;
`

export default function Footer() {
  return ( 
    <Container>
      <Text>&copy; Todos os direitos reservados <br />Desenvolvido por Victor Farias</Text>
    </Container>
  );
}
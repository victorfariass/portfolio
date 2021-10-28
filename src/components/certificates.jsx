import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import certificatesImages from '../images/certificates';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Container = styled.div`
  width: 60vw;
  margin: auto;
`

const Title = styled.h4`
  text-align: center;
  margin-bottom: 30px;
`

const Certificate = styled.div`
  display: flex;
  justify-content: center;
`

export default function Certificates() {
  return (
    <Container>
      <Title>Certificados</Title>
      <Carousel>
        {certificatesImages.map((certificate, index) => (
          <Carousel.Item>
            <Certificate key={index}>
              <img src={certificate} alt={`Certificado de ${certificate}`} />
            </Certificate>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

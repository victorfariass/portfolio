import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { projetos } from '../data';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Container = styled.div`
  width: 60vw;
  margin: auto;
  margin-bottom: 50px;
  & {
    .carousel-control-next-icon, .carousel-control-prev-icon {
      background-color: rgba(0, 0, 0, 0.411);
    }
    .carousel-indicators {
      background-color: rgba(0, 0, 0, 0.418);
    }
  }
`

const Title = styled.h4`
  text-align: center;
  margin-bottom: 30px;
`

const ProjectItem = styled.div`
  width: 600px;
  height: 293px;
  padding-left: 0;
  margin: auto;
  background-image: url(${props => props.image});
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.644);
  border-radius: 0;
  &:hover {
    opacity: 1.0;
    background-color: rgba(0, 0, 0, 0.829);
  }
`

const Name = styled.h1`
  font-size: 28px;
  margin: 20px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
`

const ListItem = styled.li`
  list-style: none;
`

const Logo = styled.img`
  filter: invert(99%) sepia(10%) saturate(2%) hue-rotate(309deg) brightness(117%) contrast(100%);
  width: 30px;
  margin: 5px;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
    font-weight: bolder;
    color: white;
  }
`

export default function Projects() {
  return (
    <Container>
      <Title>Projetos</Title>
      <Carousel>
        {projetos.map((projeto, index) => (
          <Carousel.Item>
            <ProjectItem image={projeto.image}>
              <Card>
                <Name>{projeto.name}</Name>
                <Section>
                  <Techs className='flex tecnologias'>
                    <Title>Tecnologias</Title>
                    <List>
                      {projeto.techs.map((tech, index) => (
                        <ListItem>
                          <Logo src={tech} alt='logo' />
                        </ListItem>
                      ))}
                    </List>
                  </Techs>
                  <Buttons className='flex buttons'>
                    {projeto.deploy && (
                      <Link href={projeto.deploy} target='_blank' rel='noreferrer'>VER PROJETO</Link>
                    )}
                    <Link href={projeto.link} target='_blank' rel='noreferrer'>VER REPOSITÓRIO</Link>
                  </Buttons>
                </Section>
              </Card>
            </ProjectItem>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

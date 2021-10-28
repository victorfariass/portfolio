import React from 'react';
import { skillsLogo } from '../data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  width: 55vw;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px;
  &:hover {
    transform: scale(1.3);
  }
  &:hover::after {
    content: '${props => props.name}';
  }
`

const Logo = styled.img`
  width: 80px;
  padding: 15px 15px;
  filter: invert(99%) sepia(10%) saturate(2%) hue-rotate(309deg) brightness(117%) contrast(100%);
  text-align: center;
`

export default function HardSkills() {
  return (
    <Container>
      <h4>Conhecimentos</h4>
      <List>
        {skillsLogo.map((hardSkill, index) => (
          <ListItem name={hardSkill.name} key={index}>
            <Logo src={hardSkill.url} alt='logo' />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
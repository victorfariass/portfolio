import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { projetos } from '../data';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
  return (
    <div className='projects-main'>
      <h4>Projetos</h4>
      <Carousel>
        {projetos.map((projeto, index) => (
          <Carousel.Item>
            <div
              className='projects-container'
              style={{backgroundImage: `url(${projeto.image})`}}
            >
              <div className='flex card'>
                <h1>{projeto.name}</h1>
                <div className='flex techs-container'>
                  <div className='flex tecnologias'>
                    <h3>Tecnologias</h3>
                    <ul className='flex techs'>
                    {projeto.techs.map((tech, index) => (
                        <li>
                          <img className='logo' src={tech} alt='logo' />
                        </li>
                    ))}
                    </ul>
                  </div>
                  <div className='flex buttons'>
                    {projeto.deploy && (
                      <a href={projeto.deploy} target='_blank' rel='noreferrer'>VER PROJETO</a>
                    )}
                    <a href={projeto.link} target='_blank' rel='noreferrer'>VER REPOSITÓRIO</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

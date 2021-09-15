import React, { useState } from 'react';
import { frontend } from '../../../data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../projects.css';

const Frontend = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  };

  return (
    <section className="modulo">
      <h1>Frontend</h1>
      <div className="slider">
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {frontend.map((projeto, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div className="card item">
                <div>
                  <h2>{`${projeto.id} - ${projeto.name}`}</h2>
                  <p>{projeto.description}</p>
                </div>
                <div className="techs">
                  <ul>
                    <h3>Tecnologias</h3>
                    {projeto.techs.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                  <a href={projeto.link} target='_blank' rel="noreferrer">Pull Request</a>
                  {projeto.deploy && (
                    <a href={projeto.deploy} target='_blank' rel="noreferrer">Deploy</a>
                  )}
                </div>
              </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  );
}
 
export default Frontend;
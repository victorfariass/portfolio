import React from 'react';
import { fundamentos } from '../../../data';
import '../projects.css';

const Fundamentos = () => {
  return (
    <section className="modulo items-wrapper">
      <h1>Fundamentos</h1>
      <div className="items">
        { fundamentos.map((projeto => (
          <div className="card item">
            <div>
              <h2>{projeto.name}</h2>
              <p>{projeto.description}</p>
            </div>
            <div className="techs">
              <ul>
                <h3>Tecnologias</h3>
                {projeto.techs.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
              <a href={projeto.link} target='_blank' rel="noreferrer">Pull Request</a>
              {projeto.deploy ? 
                <a href={projeto.deploy} target='_blank' rel="noreferrer">Deploy</a>
                : <div></div>
              }
              
            </div>
          </div>
        )))}
      </div>
    </section>
  );
}
 
export default Fundamentos;
import React from 'react';
import { fundamentos, frontend, backend } from '../data';
import './Projetos.css';

class Projetos extends React.Component {
  render() { 
    return (
      <main className="container">
        <section className="modulo">
          <h1>Fundamentos</h1>
          { fundamentos.map((projeto => (
            <div className="card">
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
              </div>
            </div>
          )))}
        </section>
        <section className="modulo">
          <h1>Frontend</h1>
          { frontend.map((projeto => (
            <div className="card">
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
              </div>
            </div>
          )))}
        </section>
        <section className="modulo">
          <h1>Backend</h1>
          { backend.map((projeto => (
            <div className="card">
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
              </div>
            </div>
          )))}
        </section>
      </main>
    );
  }
}
 
export default Projetos;
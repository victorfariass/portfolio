import React from 'react';
import { frontend } from '../../../data';
import '../projects.css';

class Frontend extends React.Component {
  render() { 
    return (
      <section className="modulo items-wrapper">
        <h1>Frontend</h1>
        <div className="items">
          { frontend.map((projeto => (
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
                {projeto.url && (
                    <a href={projeto.url} rel="noreferrer">Projeto</a>
                )}
              </div>
            </div>
          )))}
        </div>
      </section>
    );
  }
}
 
export default Frontend;
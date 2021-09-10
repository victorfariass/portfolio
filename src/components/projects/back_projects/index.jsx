import React from 'react';
import { backend } from '../../../data';
import '../projects.css';

class Backend extends React.Component {
  render() { 
    return (
      <section className="modulo items-wrapper">
        <h1>Backend</h1>
        <div className="items">
          { backend.map((projeto => (
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
              </div>
            </div>
          )))}
        </div>
      </section>
    );
  }
}
 
export default Backend;
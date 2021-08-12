import React from 'react';
import { hardSkils, softSkils } from '../data'
import './Habilidades.css';

class Habilidades extends React.Component {
  render() { 
    return (
      <section>
        <div className="hard-container">
          <h2>Hard Skills</h2>
          <ul>
            {hardSkils.map((hardSkill) => (
              <li>{hardSkill}</li>
            ))}
          </ul>
        </div>
        <div className="soft-container">
          <h2>Soft Skills</h2>
          <div>
            {softSkils.map((data) => (
              <ul>
                <h3>{data.trilha}</h3>
                {data.skills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
 
export default Habilidades;
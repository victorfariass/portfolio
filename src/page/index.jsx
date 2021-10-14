import React from 'react';
import Info from '../components/about/info';
import Profile from '../components/about/profile';
import { fundamentos, frontend, backend } from '../data';
import Backend from '../components/projects/back_projects';
import Fundamentos from '../components/projects/fund_projects';
import Frontend from '../components/projects/front_projects';
import './About.css';
import './Skills.css';
import './Projects.css';
import HardSkills from '../components/hard_skills';

class Sobre extends React.Component {
  render() { 
    return (
      <main>
        <section className="about-container">
          <Info />
          <hr />
          <Profile />
        </section>
        <section>
          <HardSkills />
        </section>
        <section className="container">
          <hr />
          <h2>Projetos</h2>
          <Fundamentos slides={fundamentos} />
          <Frontend slides={frontend} />
          <Backend slides={backend} />
        </section>
      </main>
    );
  }
}
 
export default Sobre;
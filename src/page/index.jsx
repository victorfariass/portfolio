import React from 'react';
import Info from '../components/about/info';
import Profile from '../components/about/profile';
import Backend from '../components/projects/back_projects';
import Fundamentos from '../components/projects/fund_projects';
import Frontend from '../components/projects/front_projects';
import './About.css';
import './Skills.css';
import './Projects.css';
import HardSkills from '../components/skills/hard_skills';
import SoftSkills from '../components/skills/soft_skills';

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
          <SoftSkills />
        </section>
        <section className="container">
          <hr />
          <h2>Projetos</h2>
          <Fundamentos />
          <Frontend />
          <Backend />
        </section>
      </main>
    );
  }
}
 
export default Sobre;
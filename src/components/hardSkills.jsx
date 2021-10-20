import React from 'react';
import { skillsLogo } from '../data';

export default function HardSkills() {
  return (
    <div className='flex skills-container'>
      <h4>Conhecimentos</h4>
      <ul className='flex'>
        {skillsLogo.map((hardSkill, index) => (
          <li key={index}>
            <img src={hardSkill} alt='logo' />
          </li>
        ))}
      </ul>
    </div>
  )
}
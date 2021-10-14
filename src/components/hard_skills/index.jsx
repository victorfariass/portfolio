import React from 'react';
import { hardSkills } from '../../data';

export default function HardSkills() {
  return (
    <div className="hard-container">
      <hr />
      <h2>Conhecimentos</h2>
      <ul>
        {hardSkills.map((hardSkill, index) => (
          <li key={index}>
            <img className='logo' src={hardSkill} alt='logo' />
          </li>
        ))}
      </ul>
    </div>
  )
}
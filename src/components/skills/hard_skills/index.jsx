import React from 'react';
import { hardSkills } from '../../../data';

export default function HardSkills() {
  return (
    <div className="hard-container">
      <hr />
      <h2>Hard Skills</h2>
      <ul>
        {hardSkills.map((hardSkill) => (
          <li>{hardSkill}</li>
        ))}
      </ul>
    </div>
  )
}
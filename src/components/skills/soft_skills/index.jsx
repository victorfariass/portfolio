import React from 'react';
import { softSkills } from '../../../data';

export default function SoftSkills() {
  return (
    <div className="soft-container">
      <h2>Soft Skills</h2>
      <div>
        {softSkills.map((data, index) => (
          <ul key={index}>
            <h3>{data.trilha}</h3>
            {data.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
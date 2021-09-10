import React from 'react';
import { softSkills } from '../../../data';

export default function SoftSkills() {
  return (
    <div className="soft-container">
      <h2>Soft Skills</h2>
      <div>
        {softSkills.map((data) => (
          <ul>
            <h3>{data.trilha}</h3>
            {data.skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
import React from 'react'
import {
  skills
} from '../config'

const SkillsTab = () => (
  <div className="single-tab-content">
    <ul>
      <li>
        {
    skills.map((val, i) => (
      <span key={i}>
        <span className="lvlSkills">
          {val.icon}
          {' '}
        </span>
        <span className="lvlSkillsTwo">{val.name}</span>
      </span>
    ))

      }
      </li>

    </ul>
  </div>
)

export default SkillsTab

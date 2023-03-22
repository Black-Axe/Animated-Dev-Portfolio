import React from 'react'
import {
  mainSkills
} from '../config'

const MainSkillsTab = () => (
  <div className="single-tab-content">
    <ul>
      {mainSkills.map((val, i) => (
        <li key={i}>
          <span className="tabHeader">
            {` ${val.title} - ` }
            <span className="lvl">{val.exp}</span>
          </span>
          <br />
          {val.description}
        </li>
      ))}
    </ul>
  </div>
)

export default MainSkillsTab

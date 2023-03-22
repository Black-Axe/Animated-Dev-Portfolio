import React from 'react'
import {
  experience
} from '../config'

const ExperienceTab = () => (

  <div className="single-tab-content">
    <ul>
      {
        experience.map((val, i) => (
          <li key={i}>
            <span className="tabHeader">
              {` ${val.title} - ` }
              <span className="lvl">{val.company}</span>
            </span>
            <br />
            {val.timeline}
          </li>
        ))

          }
    </ul>
  </div>

)

export default ExperienceTab

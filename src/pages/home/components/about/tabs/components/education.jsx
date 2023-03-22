import React from 'react'
import {
  education
} from '../config'

const EducationTab = () => (
  <div className="single-tab-content">
    <ul>
      {
        education.map((val, i) => (
          <li key={i}>
            <span className="tabHeader">
              {`${val.title} - ` }
              <span className="lvl">{val.school}</span>
            </span>
            <br />
            {val.description}
            <br />
            <span>
              Graduation:
              {' '}
              <span className="lvl">
                {val.graduation}
                {' '}
              </span>
            </span>
          </li>
        ))
      }

    </ul>
  </div>
)

export default EducationTab

import React from 'react'
import { DiReact, DiDjango, DiSass } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import {
  SiExpress, SiFlask, SiPython,
  SiTypescript, SiRedux, SiMysql,
  SiMongodb, SiPostgresql, SiGithub, SiBitbucket,
  SiJest, SiTestinglibrary, SiAirbnb,
  SiFirebase, SiAmazonaws, SiGoogle, SiHeroku, SiDocker, SiKubernetes,
  SiSpringboot, SiHtml5, SiCss3
} from 'react-icons/si'

import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs'
import { FaGit } from 'react-icons/fa'

import {
  mainSkills, experience, education, skills
} from './config'

export default function HomeTabs() {
  const tab1 = 'Main skills'
  const tab3 = 'Experience'
  const tab4 = 'Education'
  const tab5 = 'Frameworks & Tools'
  const tabStyle = 'tab-style--1'

  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  {/*   <Tab>{tab2}</Tab>   */}
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                  <Tab>{tab5}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {mainSkills.map((val, i) => (
                        <li key={i}>
                          <span className="tabHeader">
                            {val.title}
                            {' '}
                            -
                            {' '}
                            <span className="lvl">{val.exp}</span>
                          </span>
                          <br />
                          {val.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {
                                                    experience.map((val, i) => (
                                                      <li key={i}>
                                                        <span className="tabHeader">
                                                          {val.title}
                                                          {' '}
                                                          -
                                                          {' '}
                                                          <span className="lvl">{val.company}</span>
                                                        </span>
                                                        <br />
                                                        {val.timeline}
                                                      </li>
                                                    ))

                                               }
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {
                                                    education.map((val, i) => (
                                                      <li key={i}>
                                                        <span className="tabHeader">
                                                          {val.title}
                                                          {' '}
                                                          -
                                                          {' '}
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
                </TabPanel>

                <TabPanel>
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
                </TabPanel>

              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  )
}

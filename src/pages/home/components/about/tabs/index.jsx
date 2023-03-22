import React from 'react'

import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs'

import MainSkillsTab from './components/main-skills'
import ExperienceTab from './components/experience'
import EducationTab from './components/education'
import SkillsTab from './components/skills'

const HomeTabs = () => {
  const tab1 = 'Main skills'
  const tab2 = 'Experience'
  const tab3 = 'Education'
  const tab4 = 'Frameworks & Tools'
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
                  <Tab>{tab2}</Tab>
                  <Tab>{tab3}</Tab>
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <MainSkillsTab />
                </TabPanel>

                <TabPanel>
                  <ExperienceTab />
                </TabPanel>

                <TabPanel>
                  <EducationTab />
                </TabPanel>

                <TabPanel>
                  <SkillsTab />
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

export default HomeTabs

import React, { Fragment, useState } from 'react'

import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import Breadcrumbs from '@components/breadcrumbs'

import TasksList from './TasksList'

const Tasks = () => {

  const [activeTab, setActiveTab] = useState('1')

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbRole='Contractors PANEL'
        breadCrumbParent='PAGES'
        breadCrumbActive='TASKS MANAGEMENT'
        panelLink='/contractor/dashboard'
      />
      <Row>
        <Col sm='12'>
          <Card>
            <CardBody className='pt-2'>
              <Nav pills className="igs-nav-pill mb-0">
                <NavItem>
                  <NavLink active={activeTab === '1'} onClick={() => setActiveTab('1')}>
                    <span className='align-middle d-sm-block'>My Tasks</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activeTab === '2'} onClick={() => setActiveTab('2')}>
                    <span className='align-middle d-sm-block'>Add Task</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <TasksList />
            </TabPane>
            <TabPane tabId='2'>
              <div>
                Add Task
              </div>
            </TabPane>
          </TabContent>          
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tasks

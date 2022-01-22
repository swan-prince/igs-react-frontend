import React, { Fragment, useState } from 'react'

import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import Breadcrumbs from '@components/breadcrumbs'
import UsersList from './UsersList'
import UsersRoles from './UsersRoles'

const Users = () => {

  const [activeTab, setActiveTab] = useState('1')

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbRole='ADMIN PANEL'
        breadCrumbParent='PAGES'
        breadCrumbActive='USERS LIST'
        panelLink='/admin/dashboard'
      />
      <Row>
        <Col sm='12'>
          <Card>
            <CardBody className='pt-2'>
              <Nav pills className="igs-nav-pill mb-0">
                <NavItem>
                  <NavLink active={activeTab === '1'} onClick={() => setActiveTab('1')}>
                    <span className='align-middle d-sm-block'>USERS LIST</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activeTab === '2'} onClick={() => setActiveTab('2')}>
                    <span className='align-middle d-sm-block'>USERS ROLES</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <UsersList />
            </TabPane>
            <TabPane tabId='2'>
              <UsersRoles />
            </TabPane>
          </TabContent>          
        </Col>
      </Row>
    </Fragment>
  )
}

export default Users

import React, { Fragment, useState } from 'react'

import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

import Breadcrumbs from '@components/breadcrumbs'

import EquipmentList from "./EquipmentList"

const Equipments = () => {

  const [activeTab, setActiveTab] = useState('1')

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbRole='ADMIN PANEL'
        breadCrumbParent='PAGES'
        breadCrumbActive='EQUIPMENT LIST'
        panelLink='/admin/dashboard'
      />
      <Row>
        <Col sm='12'>
          <Card>
            <CardBody className='pt-2'>
              <Nav pills className="igs-nav-pill mb-0">
                <NavItem>
                  <NavLink active={activeTab === '1'} onClick={() => setActiveTab('1')}>
                    <span className='align-middle d-sm-block'>Equipment List</span>
                  </NavLink>
                </NavItem>               
              </Nav>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <EquipmentList />
            </TabPane>           
          </TabContent>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Equipments

import React from 'react'
import { Link } from 'react-router-dom'
import { Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'

import IGSLogo from '@src/assets/images/logo/igs-logo.png'

const LoginSection = () => {

  return (
    <div className='igs-auth-left-section auth-bg px-2 p-lg-3 igs-bg-auth'>
      <Col className='mx-auto content-section' sm='8' md='6' lg='12'>
        <CardTitle tag='h2' className='mb-2 text-center igc-text-color-3'>
          Welcome To
        </CardTitle>
        <div className="logo text-center">
          <img src={IGSLogo} decoding="async" alt="IGS" width="216px" />
        </div>
        <CardText className='sign-note text-center text-white'>
          Please Sign-in to Your Company Account
        </CardText>
        <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label className='form-label text-white' for='login-company'>
              Company ID
            </Label>
            <Input type='text' id='login-company' placeholder='Enter Your Comapny ID' className='igs-input-text' autoFocus />
          </FormGroup>
          <FormGroup>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <CustomInput type='checkbox' className='custom-control-info igs-input-text' id='remember-me' label='Remember Me' />
            </div>
          </FormGroup>
          <div className="text-center my-3">
            <Link to='/forgot' className="text-white">
              <small>Forgot Company ID?</small>
            </Link>
          </div>
          <Button.Ripple tag={Link} to='/admin/dashboard' color='info' block>
            Login
          </Button.Ripple>
        </Form>
        <div className='text-center mt-3'>
          <p className='text-white'>New on our platform?</p>
          <Link to='/' className="text-info">
            <span>Create New Company<br />Account</span>
          </Link>
        </div>
        <div className='auth-footer-btn mb-0'>
          <p className="text-white text-center">
            All Rights Reserved
          </p>
          <p className="text-white text-center mb-0">
            IGS GmbH - Berlin - Germany - 2022
          </p>
        </div>
      </Col>
    </div>
  )
}

export default LoginSection

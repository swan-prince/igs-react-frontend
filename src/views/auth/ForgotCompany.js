import { Link } from 'react-router-dom'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

import IGSLogo from '@src/assets/images/logo/igs-logo.png'

const ForgotCompany = () => {

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <div className='igs-auth-left-section auth-bg px-2 p-lg-3 igs-bg-auth'>
          <Col className='mx-auto content-section' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='mb-2 text-center igc-text-color-3'>
              Welcome To
            </CardTitle>
            <div className="logo text-center">
              <img src={IGSLogo} decoding="async" alt="IGS" width="216px" />
            </div>
            <div className="text-center mt-3">
              <Link to='/forgot' className="text-white font-weight-bold">
                Forgot Company ID?
              </Link>
            </div>
            <CardText className='sign-note text-center text-white'>
              First Step: <br />
              Call Your Company IT Team
            </CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label text-white' for='login-company'>
                  Call us
                </Label>
                <Input type='text' id='login-company' placeholder='Enter Your Comapny ID' autoFocus className='igs-input-text' />
              </FormGroup>             
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
        <div className='igs-auth-right-section d-none d-lg-block'>
          <div className="auth-nav bg-white text-center">
            <img src={IGSLogo} decoding="async" alt="Marine" width="310px" height="82px" />
          </div>
          <div className='background-section'>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default ForgotCompany

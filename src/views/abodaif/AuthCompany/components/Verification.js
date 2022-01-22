import React from 'react'
import {
  Row,
  Col,
  FormGroup,  
  Input,
  CustomInput,
  Button
} from 'reactstrap'
import { ChevronLeft } from 'react-feather'

const Verification = (props) => {

  const { stepper } = props

  return (
    <Row>
      <Col sm='12' md='9' lg='8'>
        <p>
          We will sent a verification code to both of your written mobile and email in previous form.<br /> Press Send and Enter the code from the mobile and email in the field below.
        </p>
      </Col>
      <Col sm='12' md='3' lg='4'>
        <div className='text-right mb-0-5'>
          <a
            className='text-primary'
            color='primary'
            href='/'
            target='_blank'
          >
            Send Code
          </a>
        </div>
        <div className='text-right mb-0-5'>
          <a
            className='text-primary'
            color='primary'
            href='/'
            target='_blank'
          >
            Change Mobile
          </a>
        </div>
        <div className='text-right mb-0-5'>
          <a
            className='text-primary'
            color='primary'
            href='/'
            target='_blank'
          >
            Change Email
          </a>
        </div>
      </Col>
      <Col sm='12'>
        <p className='text-center'>
          Type your 6 digit security code ( Mobile )
        </p>
        <div className='d-flex justify-content-center'>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
        </div>
      </Col>
      <Col sm='12' className='mt-3'>
        <p className='text-center'>
          Type your 6 digit security code ( Email )
        </p>
        <div className='d-flex justify-content-center'>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
          <FormGroup className='igs-security-input mx-0-5'>
            <Input type='text' className='border-info text-center' maxLength='1' />
          </FormGroup>
        </div>
      </Col>
      <Col sm='12' className='mt-2 text-center'>
        <CustomInput
          inline
          type='checkbox'
          id='verification-1'
          label='I hereby that I represent this registered company under my legal responsibility'
          htmlFor='verification-1'
          className='custom-control-info'
        />
      </Col>
      <Col sm='12' className='mt-2 text-center'>
        <CustomInput
          inline
          type='checkbox'
          id='verification-2'
          label='I hereby that All Data filled by me in previous pages are correct under my legal responsibility'
          htmlFor='verification-2'
          className='custom-control-info'
        />
      </Col>
      <Col sm='12' className='mt-2 text-center'>
        <Button.Ripple color='info' onClick={() => stepper.next()} >
          Submit
        </Button.Ripple>
        <p className='text-center mt-2'>
          Didn’t get the code?
          <a
            className='ml-1 text-primary'
            color='primary'
            href='/'
            target='_blank'
          >
            Resend or Call Us
          </a>
        </p>
      </Col>
      <Col sm='12' md='6' lg='2'>
        <Button.Ripple color='primary' className='mt-1 w-100' onClick={() => stepper.previous()}>
          <ChevronLeft size='16' />
          Previous
        </Button.Ripple>
      </Col>
    </Row>
  )
}

export default Verification

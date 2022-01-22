import { useState } from 'react'
import Uppy from '@uppy/core'
import CreatableSelect from 'react-select/creatable'
import { DragDrop } from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button
} from 'reactstrap'
import { ChevronLeft } from 'react-feather'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const UserAdminInfo = (props) => {

  const { stepper } = props

  const [companyLogo, setCompanyLogo] = useState(null)

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  const demoSelectData = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setCompanyLogo(preview)
  })

  return (
    <Row>
      <Col className='mx-auto' sm='8' md='12' lg='8'>
        <FormGroup>
          <Label for='basicInput'>Full Name</Label>
          <Input type='text' id='basicInput' placeholder='Enter Full Name' />
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>User Name</Label>
          <Input type='text' id='basicInput' placeholder='Enter Preferred User Name' />
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>Email</Label>
          <Input type='email' id='basicInput' placeholder='Enter Email' />
        </FormGroup>
        <Row>
          <Col sm='12' md='6' lg='3'>
            <FormGroup>
              <Label for='basicInput'>Street Address</Label>
              <Input type='email' id='basicInput' placeholder='' />
            </FormGroup>
          </Col>
          <Col sm='12' md='6' lg='3'>
            <div className='mb-1'>
              <Label>Area</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='-- Select Area --'
              />
            </div>
          </Col>
          <Col sm='12' md='6' lg='3'>
            <div className='mb-1'>
              <Label>City</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='-- Select City --'
              />
            </div>
          </Col>
          <Col sm='12' md='6' lg='3'>
            <div className='mb-1'>
              <Label>Country</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='-- Select Country --'
              />
            </div>
          </Col>
        </Row>
        <FormGroup>
          <Label for='basicInput'>National ID</Label>
          <Input type='text' id='basicInput' placeholder='Only 14 Numbers is allowed' />
          <div className='d-flex'>
            <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>Passport ( If Existed )</Label>
          <Input type='text' id='basicInput' placeholder='Enter Your Passport No.' />
          <div className='d-flex'>
            <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>Military Status </Label>
          <Input type='text' id='basicInput' placeholder='Enter Your Passport No.' />
          <div className='d-flex'>
            <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
          </div>
        </FormGroup>
        <Row>
          <Col sm='12' md='12' lg='6'>
            <FormGroup>
              <Label for='basicInput'>Mobile Number</Label>
              <Input type='text' id='basicInput' placeholder='Enter Mobile No.' />
            </FormGroup>
          </Col>
          <Col sm='12' md='12' lg='6'>
            <FormGroup>
              <Label for='basicInput'>Office Landline Number</Label>
              <Input type='text' id='basicInput' placeholder='Enter Office Landline Number' />
            </FormGroup>
          </Col>
          <Col sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>Marital Status </Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='---Select Marital Status  ---'
              />
            </div>
          </Col>
          <Col sm='12' md='12' lg='6'>
            <FormGroup>
              <Label for='basicInput'>Emergency Mobile No.</Label>
              <Input type='text' id='basicInput' placeholder='Enter Emergency Mobile No.' />
            </FormGroup>
          </Col>
          <Col sm='12' md='12' lg='6'>
            <div className=''>
              <Label>Education Level</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='--- Select Education Level  ---'
              />
            </div>
            <div className='d-flex'>
              <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
            </div>
          </Col>
          <Col sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>College</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='--- Select your College ---'
              />
            </div>
          </Col>
        </Row>
      </Col>

      <Col className='mx-auto' sm='8' md='12' lg='4'>
        <div className='demo-inline-spacing mb-1 justify-content-center'>
          <CustomInput type='radio' id='exampleCustomRadio' name='gender' inline label='Male' defaultChecked />
          <CustomInput type='radio' id='exampleCustomRadio2' name='gender' inline label='Female' />
        </div>
        <div>
          <DragDrop
            uppy={uppy}
            note='Profile Picture'
            height='200px'
            locale={{
              strings: {
                dropHereOr: 'Drop here or %{browse}',
                browse: 'browse'
              }
            }}
          />
          {companyLogo !== null ? <img className='rounded mt-2' src={companyLogo} alt='avatar' /> : null}
          <div className='mt-2'>
            <div className='d-flex'>
              <Button.Ripple color='info' className='w-50 mx-auto'>Upload</Button.Ripple>
            </div>
            <div className='d-flex mt-1'>
              <Button.Ripple color='secondary' outline className='w-50 mx-auto'>
                Reset
              </Button.Ripple>
            </div>
            <p className='text-center mt-1'>
              Allowed File Types<br />png, jpg, jpeg
            </p>
          </div>
        </div>

        <FormGroup>
          <Label>CV</Label>
          <CustomInput type='file' name='customFile' id='attachment-1' placeholder='Upload Your CV' />
          <div className='d-flex'>
            <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
          </div>
        </FormGroup>
        <div className='mb-2'>
          <Label>Do You Have a car?</Label>
          <div className='demo-inline-spacing'>
            <CustomInput type='radio' id='carRadio' name='car' inline label='Yes' defaultChecked />
            <CustomInput type='radio' id='carRadio2' name='car' inline label='No' />
          </div>
        </div>
        <div className='mb-2'>
          <Label>Do You Have Car Licence?</Label>
          <div className='demo-inline-spacing'>
            <CustomInput type='radio' id='licenceRadio' name='licence' inline label='Yes' defaultChecked />
            <CustomInput type='radio' id='licenceRadio2' name='licence' inline label='No' />
          </div>
        </div>
        <FormGroup>
          <Label>Driving Licence ( If Existed ) </Label>
          <CustomInput type='file' name='customFile' id='attachment-1' placeholder='Upload your driving licence if existed' />
          <div className='d-flex'>
            <Button.Ripple color='flat-primary' className='ml-auto'>Attach</Button.Ripple>
          </div>
        </FormGroup>
      </Col>

      <Col sm='12' lg='8'>
      </Col>
      <Col sm='12' lg='4'>
        <Row>
          <Col sm='6'>
            <Button.Ripple color='info' className='w-100 mb-1' onClick={() => stepper.next()}>Next</Button.Ripple>
          </Col>
          <Col sm='6'>
            <Button.Ripple color='info' outline className='w-100'>
              Reset
            </Button.Ripple>
          </Col>
        </Row>
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

export default UserAdminInfo

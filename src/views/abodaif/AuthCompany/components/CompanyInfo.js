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

const CompanyInfo = (props) => {

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
          <Label for='basicInput'>Company Name</Label>
          <Input type='email' id='basicInput' placeholder='Enter Company Name' className='bg-white' />
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>Company Address</Label>
          <Input type='email' id='basicInput' placeholder='Building, Street' className='bg-white' />
        </FormGroup>
        <div className='mb-1'>
          <Label>Country</Label>
          <CreatableSelect
            options={demoSelectData}
            className='react-select'
            classNamePrefix='select'
            placeholder='-- Select Country --'
          />
        </div>
        <div className='mb-1'>
          <Label>City</Label>
          <CreatableSelect
            options={demoSelectData}
            className='react-select'
            classNamePrefix='select'
            placeholder='-- Select City --'
          />
        </div>
        <div className='mb-1'>
          <Label>Area</Label>
          <CreatableSelect
            options={demoSelectData}
            className='react-select'
            classNamePrefix='select'
            placeholder='-- Select Area --'
          />
        </div>

        <div className='mb-1'>
          <Label>Company Type</Label>
          <CreatableSelect
            options={demoSelectData}
            className='react-select'
            classNamePrefix='select'
            placeholder='-- Select Company Type --'
          />
        </div>
        <FormGroup>
          <Label for='basicInput'>Company Registration No.</Label>
          <Input type='email' id='basicInput' placeholder='Enter Company Registration Number' className='bg-white' />
        </FormGroup>
        <FormGroup>
          <Label for='basicInput'>Company Tax No</Label>
          <Input type='email' id='basicInput' placeholder='Enter Company Tax Number' className='bg-white' />
        </FormGroup>
        <Row>
          <Col className='mx-auto' sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>Total Employee No.</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='State'
              />
            </div>
          </Col>
          <Col className='mx-auto' sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>Total Sites No.</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='State'
              />
            </div>
          </Col>
          <Col className='mx-auto' sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>Required Users No. to be on system</Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='State'
              />
            </div>
          </Col>
          <Col className='mx-auto' sm='12' md='12' lg='6'>
            <div className='mb-1'>
              <Label>Required Sites No. to be on system </Label>
              <CreatableSelect
                options={demoSelectData}
                className='react-select'
                classNamePrefix='select'
                placeholder='State'
              />
            </div>
          </Col>
        </Row>
      </Col>

      <Col className='mx-auto' sm='8' md='12' lg='4'>

        <div>
          <DragDrop
            uppy={uppy}
            note='Company Logo'
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
          <Label>Attachment</Label>
          <CustomInput type='file' name='customFile' id='attachment-1' placeholder='Add 14% or Tax Exemption document' />
        </FormGroup>
        <FormGroup>
          <Label>Attachment</Label>
          <CustomInput type='file' name='customFile' id='attachment-2' placeholder='Add 14% or Tax Exemption document' />
        </FormGroup>
        <FormGroup>
          <Label>Attachment</Label>
          <CustomInput type='file' name='customFile' id='attachment-3' placeholder='Add 14% or Tax Exemption document' />
        </FormGroup>
      </Col>

      <Col sm='12' lg='8'>
      </Col>
      <Col sm='12' lg='4'>
        <Row>
          <Col sm='6'>
            <Button.Ripple color='info' className='w-100 mb-1' onClick={() => stepper.next()}>
              Next
            </Button.Ripple>
          </Col>
          <Col sm='6'>
            <Button.Ripple color='info' outline className='w-100'>
              Reset
            </Button.Ripple>
          </Col>
        </Row>
      </Col>
      <Col sm='12' md='6' lg='2'>
        <Button.Ripple color='primary' className='mt-1 w-100'>
          <ChevronLeft size='16' />
          Previous
        </Button.Ripple>
      </Col>
    </Row>
  )
}

export default CompanyInfo

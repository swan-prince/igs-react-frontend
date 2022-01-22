import { useRef, useState } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
  InputGroupAddon,
  InputGroup
} from 'reactstrap'
import { Search, FileText, User, MapPin, Link } from 'react-feather'

const CompanyInfo = (props) => {

  const demoSelectData = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]
  
  return (
    <div>
      company info
    </div>
  )
}

export default CompanyInfo

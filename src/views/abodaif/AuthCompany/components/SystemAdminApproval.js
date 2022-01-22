import React from 'react'
import {  
  Button,
  CardTitle, 
  CardText
} from 'reactstrap'
import { Check, ChevronLeft } from 'react-feather'

import Avatar from '@components/avatar'

const SystemAdminApproval = (props) => {

  const { stepper } = props

  return (
    <div>
      <Avatar color='info' icon={<Check />} />
      <div className='text-center py-5'>
        <CardTitle tag='h2'>Successful Submisson</CardTitle>
        <CardText className='card-text'>
          Your Submission Form has been forwarded to Our<br /> Reviewing Team , Kindly wait for our Response<br /> meassage for all login details<br /> in your email very soon
        </CardText>
      </div>
      <Button.Ripple color='primary' className='mt-1' onClick={() => stepper.previous()}>
        <ChevronLeft size='16' />
        Back to Login Page
      </Button.Ripple>
    </div>
  )
}

export default SystemAdminApproval

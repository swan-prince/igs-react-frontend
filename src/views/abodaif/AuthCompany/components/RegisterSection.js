import { useRef, useState } from 'react'
import { CreditCard, Home, User } from 'react-feather'

import Wizard from '@components/wizard'
import CompanyInfo from './CompanyInfo'
import UserAdminInfo from './UserAdminInfo'
import SystemAdminApproval from './SystemAdminApproval'
import IGSLogo1 from '@src/assets/images/logo/igs-logo.png'

const RegisterSection = () => {

  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'company-info',
      title: 'Company Info',
      subtitle: 'Enter Information',
      icon: <Home size={18} />,
      content: <CompanyInfo stepper={stepper} />
    },
    {
      id: 'user-info',
      title: 'User Admin Info',
      subtitle: 'Enter Information',
      icon: <User size={18} />,
      content: <UserAdminInfo stepper={stepper} />
    },
    {
      id: 'admin-approval',
      title: 'System Admin Approval',
      subtitle: 'Wait for Response',
      icon: <CreditCard size={18} />,
      content: <SystemAdminApproval stepper={stepper} />
    }
  ]

  return (
    <div className='igs-auth-right-section d-block bg-white'>
      <div className="pt-2">
        <div className='abodaif-auth-nav bg-info border-radius-6px position-relative'>
          <h3 className='text-white text-center py-1'>
            Create New Company Account
          </h3>
          <img src={IGSLogo1} alt="logo" decoding='async' className='abodaif-nav-logo d-none d-md-block' />
        </div>
      </div>
      <div className='p-3'>
        <div className='modern-horizontal-wizard abodaif-wizard'>
          <Wizard
            type='modern-horizontal'
            ref={ref}
            steps={steps}
            options={{
              linear: false
            }}
            instance={el => setStepper(el)}
          />
        </div>       
      </div>
    </div>
  )
}

export default RegisterSection

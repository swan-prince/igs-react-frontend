import { Row } from 'reactstrap'

import LoginSection from './components/LoginSection'
import RegisterSection from './components/RegisterSection'

import '@styles/base/pages/page-auth.scss'
import '@src/assets/scss/custom/abodaif.scss'

const AuthUser = () => {  

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <LoginSection />
        <RegisterSection />
      </Row>
    </div>
  )
}

export default AuthUser

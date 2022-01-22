// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import Proptypes from 'prop-types'
import {
  Breadcrumb,
  BreadcrumbItem 
} from 'reactstrap'

const BreadCrumbs = props => {
  // ** Props
  const { 
    breadCrumbRole, 
    breadCrumbParent, 
    breadCrumbParent2, 
    breadCrumbParent3, 
    breadCrumbActive,
    panelLink
  } = props

  return (
    <div className='content-header row'>
      <div className='content-header-left col-md-9 col-12 mb-2'>
        <div className='row breadcrumbs-top'>
          <div className='col-12'>            
            <div className='breadcrumb-wrapper px-0 vs-breadcrumbs d-sm-block d-none col-12'>
              <Breadcrumb>
                <BreadcrumbItem tag='li'>
                  <Link to={panelLink} className="text-white">{breadCrumbRole}</Link>
                </BreadcrumbItem>
                <BreadcrumbItem tag='li' className='text-white'>
                  {breadCrumbParent}
                </BreadcrumbItem>
                {breadCrumbParent2 ? (
                  <BreadcrumbItem tag='li' className='text-white'>
                    {breadCrumbParent2}
                  </BreadcrumbItem>
                ) : (
                  ''
                )}
                {breadCrumbParent3 ? (
                  <BreadcrumbItem tag='li' className='text-white'>
                    {breadCrumbParent3}
                  </BreadcrumbItem>
                ) : (
                  ''
                )}
                <BreadcrumbItem tag='li' active>
                  {breadCrumbActive}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}
export default BreadCrumbs

// ** PropTypes
BreadCrumbs.propTypes = {  
  breadCrumbActive: Proptypes.string.isRequired
}

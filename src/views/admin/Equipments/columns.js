import { Link } from 'react-router-dom'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Role Columns

const statusKeys = ['Preservation', 'Ready For Start', 'Pre-Preservation']

const statusObj = {
  0: 'light-yellow',
  1: 'light-success',
  2: 'light-danger'
}

const renderRequired = (value) => {
  if (value) {
    return <Link to='/' className='text-underline igc-text-color-1'><span className='text-capitalize'>View</span></Link>
  } else {
    return <span className='text-capitalize'>NO</span>
  }
}

export const columns = [
  {
    name: '#',
    minWidth: '172px',
    selector: 'id',
    sortable: true,
    cell: row => <span className='text-primary'>#{row.id}</span>
  },
  {
    name: 'Location',
    minWidth: '172px',
    selector: 'location',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.location}</span>
  },
  {
    name: 'Description',
    minWidth: '297px',
    selector: 'description',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.description}</span>
  },
  {
    name: 'MAterial Required',
    minWidth: '320px',
    selector: 'required',
    sortable: true,
    cell: row => renderRequired(row.required)
  },  
  {
    name: 'N2 Required',
    minWidth: '138px',
    selector: 'n2',
    sortable: true,
    cell: row => renderRequired(row.n2)
  },
  {
    name: 'Department',
    minWidth: '138px',
    selector: 'department',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.department}</span>
  },
  {
    name: 'Status',
    minWidth: '30px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {statusKeys[row.status]}
      </Badge>
    )
  },
  {
    name: '',
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem          
            className='w-100'
            onClick={() => {}}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem           
            className='w-100'
            onClick={() => {}}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100' onClick={() => {}}>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]

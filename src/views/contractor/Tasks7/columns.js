import { Link } from 'react-router-dom'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Role Columns

const statusKeys = ['Preservation', 'Ready For Start', 'Pre-Preservation']

const stageObj = {
  0: 'light-yellow',
  1: 'light-success',
  2: 'light-danger'
}
const statusObj = {
  pending: 'task-light-yellow',
  active: 'light-success',
  inactive: 'light-danger'
}

const renderRequired = (value) => {
  if (value) {
    return <Link to='/' className='text-underline igc-text-color-1'><span className='text-capitalize'>View</span></Link>
  } else {
    return <span className='text-capitalize'></span>
  }
}

export const columns = [
  {
    name: '#',
    minWidth: '172px',
    selector: 'id',
    sortable: true,
    cell: row => <span className='text-primary'>{row.id}</span>
  },
  {
    name: 'Location',
    minWidth: '172px',
    selector: 'location',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.location}</span>
  },
  {
    name: 'Equip. No.',
    minWidth: '172px',
    selector: 'equip',
    sortable: true,
    cell: row => <Link to='/' className='text-underline igs-text-color-2'><span className='text-capitalize'>{row.equip}</span></Link>
  },
  {
    name: 'Issue Date',
    minWidth: '172px',
    selector: 'issueDate',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.issueDate}</span>
  },  
  {
    name: 'DUE DATE',
    minWidth: '138px',
    selector: 'dueDate',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.dueDate}</span>
  },
  {
    name: 'Procedures',
    minWidth: '138px',
    selector: 'procedures',
    sortable: true,
    cell: row => renderRequired(row.procedures)
  },
  {
    name: 'Materials',
    minWidth: '30px',
    selector: 'materials',
    sortable: true,
    cell: row => renderRequired(row.materials)
  },
  {
    name: 'Equip.Stage',
    minWidth: '30px',
    selector: 'stage',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={stageObj[row.stage]} pill>
        {statusKeys[row.stage]}
      </Badge>
    )
  },
  {
    name: 'Status',
    minWidth: '30px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        { row.status }
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

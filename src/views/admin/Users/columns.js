// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { PieChart, ArrowDownCircle, Send, MoreVertical, FileText, Trash2, Archive, TrendingUp } from 'react-feather'

import Avatar from '@components/avatar'

// ** Renders Role Columns
const renderProfit = row => {
  const roleObj = {
    1: {
      class: 'send-icon',
      icon: Send,
      color: 'light-secondary'
    },
    2: {
      class: 'arrow-icon',
      icon: ArrowDownCircle,
      color: 'light-primary'
    },
    3: {
      class: 'pie-icon',
      icon: PieChart,
      color: 'light-success'
    }
  }

  const color = roleObj[row.profitType] ? roleObj[row.profitType].color : 'primary'
  const Icon = roleObj[row.profitType] ? roleObj[row.profitType].icon : Send

  return (   
    <Avatar color={color} icon={<Icon size={14} />} />
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [
  {
    name: '#',
    minWidth: '172px',
    selector: 'id',
    sortable: true,
    cell: row => <span className='text-primary'>#{row.id.toString().padStart(3, '0')}</span>
  },
  {
    name: <TrendingUp size={14} />,
    minWidth: '172px',
    selector: 'profitType',
    sortable: true,
    cell: row => renderProfit(row)
  },
  {
    name: 'User Name',
    minWidth: '297px',
    selector: 'userName',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.userName}</span>
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },  
  {
    name: 'Type',
    minWidth: '138px',
    selector: 'type',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.type}</span>
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
        {row.status}
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

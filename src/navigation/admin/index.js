import { ChevronRight } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <ChevronRight size={20} />,
    navLink: '/admin/dashboard'
  },
  {
    id: 'users',
    title: 'Users List',
    icon: <ChevronRight size={20} />,
    navLink: '/admin/users'
  },
  {
    id: 'equipments',
    title: 'Equipment List',
    icon: <ChevronRight size={20} />,
    navLink: '/admin/equipments'
  },
  {
    id: 'materials',
    title: "Material List",
    icon: <ChevronRight size={20} />,
    navLink: '/admin/materials'
  },
  {
    id: 'reports',
    title: "Reports",
    icon: <ChevronRight size={20} />,
    navLink: '/admin/reports'
  },
  {
    id: 'tasks',
    title: "Task Management",
    icon: <ChevronRight size={20} />,
    navLink: '/admin/tasks'
  },
  {
    id: 'system',
    title: "System Work Flow",
    icon: <ChevronRight size={20} />,
    navLink: '/admin/system'
  }
]

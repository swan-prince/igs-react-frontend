import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/admin'

// ** Merge Routes
const Routes = [ 
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../views/admin/Dashboard'))   
  },
  {
    path: '/admin/users',
    component: lazy(() => import('../../views/admin/Users'))  
  },
  {
    path: '/admin/equipments',
    component: lazy(() => import('../../views/admin/Equipments'))  
  },
  {
    path: '/admin/materials',
    component: lazy(() => import('../../views/admin/Materials'))  
  },
  {
    path: '/admin/reports',
    component: lazy(() => import('../../views/admin/Reports'))  
  },
  {
    path: '/admin/tasks',
    component: lazy(() => import('../../views/admin/Tasks'))  
  },
  {
    path: '/admin/system',
    component: lazy(() => import('../../views/admin/System'))
  },
  {
    path: '/contractor/dashboard',
    component: lazy(() => import('../../views/contractor/Dashboard'))   
  },
  {
    path: '/contractor/members',
    component: lazy(() => import('../../views/contractor/Members'))  
  },
  {
    path: '/contractor/equipments',
    component: lazy(() => import('../../views/contractor/Equipments'))  
  },
  {
    path: '/contractor/materials',
    component: lazy(() => import('../../views/contractor/Materials'))  
  },
  {
    path: '/contractor/reports',
    component: lazy(() => import('../../views/contractor/Reports'))  
  },
  {
    path: '/contractor/tasks',
    component: lazy(() => import('../../views/contractor/Tasks'))  
  },
  {
    path: '/contractor/profile',
    component: lazy(() => import('../../views/contractor/Profile'))
  },
  {
    path: '/contractor/tasks7',
    component: lazy(() => import('../../views/contractor/Tasks7'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/auth/CompanyLogin')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/forgot',
    component: lazy(() => import('../../views/auth/ForgotCompany')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/marine',
    component: lazy(() => import('../../views/auth/MarineLogin')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/abodaif/auth/user',
    component: lazy(() => import('../../views/abodaif/AuthUser')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/abodaif/auth/company',
    component: lazy(() => import('../../views/abodaif/AuthCompany')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }

import { companiesSubRoutes, routes, tasksSubRoutes } from '@/constants'

import { DashboardOutlined, ProjectOutlined, ShopOutlined } from '@ant-design/icons'
import type { IResourceItem } from '@refinedev/core'

export const resources: IResourceItem[] = [
  {
    name: 'dashboard',
    list: routes.home,
    meta: {
      label: 'Dashboard',
      icon: <DashboardOutlined />,
    },
  },
  {
    name: 'companies',
    list: routes.companies,
    show: companiesSubRoutes.show,
    create: companiesSubRoutes.create,
    edit: companiesSubRoutes.edit,
    meta: {
      label: 'Companies',
      icon: <ShopOutlined />,
    },
  },
  {
    name: 'companies',
    list: routes.tasks,
    show: tasksSubRoutes.show,
    create: tasksSubRoutes.create,
    edit: tasksSubRoutes.edit,
    meta: {
      label: 'Tasks',
      icon: <ProjectOutlined />,
    },
  },
]

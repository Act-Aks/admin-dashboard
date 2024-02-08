export const routes = {
  home: '/',
  register: '/register',
  login: '/login',
  forgotPassword: '/forgot-password',
  companies: '/companies',
  tasks: '/tasks',
}

export const companiesSubRoutes = {
  show: `${routes.companies}/:id`,
  create: `${routes.companies}/new`,
  edit: `${routes.companies}/edit/:id`,
}

export const tasksSubRoutes = {
  show: `${routes.tasks}/:id`,
  create: `${routes.tasks}/new`,
  edit: `${routes.tasks}/edit/:id`,
}

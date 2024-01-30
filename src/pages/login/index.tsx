import { AuthPage } from '@refinedev/antd'

export const Login = (): JSX.Element => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: 'demo@refine.dev', password: 'demodemo' },
      }}
    />
  )
}

import { authCredentials } from '@/providers'

import { AuthPage } from '@refinedev/antd'

export const Login: React.FC = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  )
}

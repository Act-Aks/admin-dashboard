import { Layout, Space } from 'antd'

import CurrentUser from './current-user'

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    background: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 24px',
    top: 0,
    zIndex: 1001,
  }

  return (
    <Layout.Header style={headerStyle}>
      <Space align={'center'} size={'middle'}>
        <CurrentUser />
      </Space>
    </Layout.Header>
  )
}

export default Header

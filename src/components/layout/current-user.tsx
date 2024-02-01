import CustomAvatar from '@/components/customAvatar'
import type { User } from '@/graphql/generated.schema'

import { useGetIdentity } from '@refinedev/core'
import { Popover } from 'antd'

const CurrentUser: React.FC = () => {
  const { data: user } = useGetIdentity<User>()

  // const content = <div style={{ display: 'flex', flexDirection: 'column' }}></div>

  return (
    <Popover
      placement={'bottomRight'}
      trigger={'click'}
      overlayInnerStyle={{ padding: 0 }}
      overlayStyle={{ zIndex: 1000 }}
    >
      <CustomAvatar name={user?.name} src={user?.avatarUrl} size={'default'} style={{ cursor: 'pointer' }} />
    </Popover>
  )
}

export default CurrentUser

import CustomAvatar from '@/components/customAvatar'
import Text from '@/components/text'
import type { User } from '@/graphql/generated.schema'

import { SettingOutlined } from '@ant-design/icons'
import { useGetIdentity } from '@refinedev/core'
import { Button, Popover } from 'antd'
import React, { useState } from 'react'

import { AccountSettings } from './account-settings'

const CurrentUser: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: user } = useGetIdentity<User>()

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text strong style={{ padding: '12px 12px' }}>
        {user?.name}
      </Text>
      <div
        style={{ borderTop: '1px solid #d9d9d9', padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}
      >
        <Button
          style={{ textAlign: 'left' }}
          icon={<SettingOutlined />}
          type={'text'}
          block
          onClick={() => {
            setIsOpen(true)
          }}
        >
          {'Account Settings'}
        </Button>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Popover
        placement={'bottomRight'}
        trigger={'click'}
        overlayInnerStyle={{ padding: 0 }}
        overlayStyle={{ zIndex: 1000 }}
        content={content}
      >
        <CustomAvatar name={user?.name} src={user?.avatarUrl} size={'default'} style={{ cursor: 'pointer' }} />
      </Popover>
      {user && <AccountSettings opened={isOpen} setOpened={setIsOpen} userId={user?.id} />}
    </React.Fragment>
  )
}

export default CurrentUser

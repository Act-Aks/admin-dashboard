import { getNameInitials } from '@/utils'

import { Avatar as AntAvatar, type AvatarProps } from 'antd'

type CustomAvatarProps = AvatarProps & {
  name?: string
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({ name = '', style, ...props }) => (
  <AntAvatar
    alt={'Akash'}
    size={'small'}
    style={{ backgroundColor: '#87d068', display: 'flex', alignItems: 'center', border: 'none', ...style }}
    {...props}
  >
    {getNameInitials(name)}
  </AntAvatar>
)

export default CustomAvatar

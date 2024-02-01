import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import { type PropsWithChildren } from 'react'

import Header from './header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemedLayoutV2 Header={Header} Title={(titleprops) => <ThemedTitleV2 {...titleprops} text={'Refine'} />}>
      {children}
    </ThemedLayoutV2>
  )
}

export default Layout

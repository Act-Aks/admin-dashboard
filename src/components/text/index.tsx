import { ConfigProvider, Typography } from 'antd'

import { sizes } from './text.static'

export type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'huge' | 'xhuge' | 'xxhuge'
} & React.ComponentProps<typeof Typography.Text>

const Text = ({ size = 'sm', children, ...rest }: TextProps): JSX.Element => {
  return (
    // config provider is a top-level component that allows us to customize the global properties of antd components. For example, default antd theme
    // token is a term used by antd to refer to the design tokens like font size, font weight, color, etc
    // https://ant.design/docs/react/customize-theme#customize-design-token
    <ConfigProvider
      theme={{
        token: {
          ...sizes[size],
        },
      }}
    >
      {/**
       * Typography.Text is a component from antd that allows us to render text
       * Typography has different components like Title, Paragraph, Text, Link, etc
       * https://ant.design/components/typography/#Typography.Text
       */}
      <Typography.Text {...rest}>{children}</Typography.Text>
    </ConfigProvider>
  )
}

export default Text

import Text from '@/components/text'
import { totalCountVariants } from '@/constants'

import { Area, type AreaConfig } from '@ant-design/plots'
import { Card, Skeleton } from 'antd'

type DashboardTotalCountCardProps = {
  resource: 'companies' | 'contacts' | 'deals'
  isLoading: boolean
  totalCount?: number
}

const DashboardTotalCountCard: React.FC<DashboardTotalCountCardProps> = ({ resource, isLoading, totalCount }) => {
  const { primaryColor, secondaryColor, icon, title } = totalCountVariants[resource]

  const config: AreaConfig = {
    data: totalCountVariants[resource].data,
    xField: 'index',
    yField: 'value',
    appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autoFit: true,
    tooltip: false,
    animation: true,
    xAxis: false,
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          stroke: 'transparent',
        },
      },
      grid: {
        line: {
          style: {
            stroke: 'transparent',
          },
        },
      },
    },
    smooth: true,
    line: {
      color: primaryColor,
    },
    areaStyle: () => ({
      fill: `l(270) 0:#fff 0.2${secondaryColor} 1:${primaryColor}`,
    }),
  }

  return (
    <Card style={{ height: 96, padding: 0 }} bodyStyle={{ padding: '8px 8px 8px 12px' }} size={'small'}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
        {icon}
        <Text size={'md'} className={'secondary'} style={{ marginLeft: 8 }}>
          {title}
        </Text>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text
          size={'xxxl'}
          strong
          style={{
            flex: 1,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            textAlign: 'start',
            marginLeft: 48,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {isLoading ? <Skeleton.Button style={{ marginTop: 8, width: 74 }} /> : totalCount}
        </Text>

        <Area {...config} style={{ width: '50%' }} />
      </div>
    </Card>
  )
}

export default DashboardTotalCountCard

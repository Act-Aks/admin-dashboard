import Text from '@/components/text'
import { type DashboardDealsChartQuery } from '@/graphql/generated.types'
import { DASHBOARD_DEALS_CHART_QUERY } from '@/graphql/queries'
import { mapDealsData } from '@/utils/helpers'

import { DollarOutlined } from '@ant-design/icons'
import { Area, type AreaConfig } from '@ant-design/plots'
import { useList } from '@refinedev/core'
import { type GetFieldsFromList } from '@refinedev/nestjs-query'
import { Card } from 'antd'
import { useMemo } from 'react'

const DealsChart: React.FC = () => {
  const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: 'dealStages',
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
    filters: [{ field: 'title', operator: 'in', value: ['WON', 'LOST'] }],
  })

  const dealData = useMemo(() => {
    return mapDealsData(data?.data)
  }, [data?.data])

  const config: AreaConfig = {
    data: dealData,
    xField: 'timeText',
    yField: 'value',
    isStack: false,
    seriesField: 'state',
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -6,
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (val: string) => `${Number(val) / 1000}k`,
      },
    },
    tooltip: {
      formatter: (formatData) => ({
        name: formatData.sate,
        value: `${Number(formatData.value) / 1000}k`,
      }),
    },
  }

  return (
    <Card
      style={{ height: '100%' }}
      headStyle={{ padding: '8px 16px' }}
      bodyStyle={{ padding: '24px 24px 0 24px' }}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <DollarOutlined />
          <Text style={{ marginLeft: '0.5rem' }} size={'sm'}>
            {'Deals'}
          </Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  )
}

export default DealsChart

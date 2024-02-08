import CustomAvatar from '@/components/customAvatar'
import LatestActivitiesSkeleton from '@/components/skeleton/latest-activities'
import Text from '@/components/text'
import { DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY, DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY } from '@/graphql/queries'

import { UnorderedListOutlined } from '@ant-design/icons'
import { useList } from '@refinedev/core'
import { Card, List, Space } from 'antd'
import dayjs from 'dayjs'

const DashboardLatestActivities: React.FC = () => {
  const {
    data: audits,
    isLoading: isAuditLoading,
    isError: isAuditError,
  } = useList({
    resource: 'audits',
    meta: {
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_AUDITS_QUERY,
    },
  })

  const dealIds = audits?.data?.map((audit) => audit?.targetId)

  const { data: deals, isLoading: isDealsLoading } = useList({
    resource: 'deals',
    meta: {
      gqlQuery: DASHBOARD_LATEST_ACTIVITIES_DEALS_QUERY,
    },
    queryOptions: { enabled: Boolean(dealIds?.length) },
    pagination: {
      mode: 'off',
    },
    filters: [{ field: 'id', operator: 'in', value: dealIds }],
  })

  if (isAuditError) {
    return null
  }

  const isLoading = isAuditLoading || isDealsLoading

  return (
    <Card
      headStyle={{ padding: 16 }}
      bodyStyle={{ padding: '0 1rem' }}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <UnorderedListOutlined />
          <Text size={'sm'} style={{ marginLeft: '0.5rem' }}>
            {'Latest Activities'}
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout={'horizontal'}
          dataSource={Array.from({ length: 5 }).map((_, index) => ({ id: index }))}
          renderItem={(_, index) => <LatestActivitiesSkeleton key={index} />}
        />
      ) : (
        <List
          itemLayout={'horizontal'}
          dataSource={audits?.data}
          renderItem={(auditItem) => {
            const deal = deals?.data?.find((dealItem) => dealItem.id === String(auditItem?.targetId)) ?? undefined

            return (
              <List.Item>
                <List.Item.Meta
                  title={dayjs(deal?.createdAt).format('MMM DD, YYYY - HH:mm')}
                  avatar={
                    <CustomAvatar shape={'square'} size={48} src={deal?.company.avatarUrl} name={deal?.company.name} />
                  }
                  description={
                    <Space size={4}>
                      <Text strong>{auditItem?.user?.name}</Text>
                      <Text>{auditItem?.action === 'CREATE' ? 'create' : 'moved'}</Text>
                      <Text strong>{deal?.title}</Text>
                      <Text>{'deal'}</Text>
                      <Text>{auditItem?.action === 'CREATE' ? 'in' : 'to'}</Text>
                      <Text>{deal?.stage?.title}</Text>
                    </Space>
                  }
                />
              </List.Item>
            )
          }}
        />
      )}
    </Card>
  )
}

export default DashboardLatestActivities

import { CustomAvatar, Text } from '@/components'
import { type Company } from '@/graphql/generated.schema'
import { COMPANIES_LIST_QUERY } from '@/graphql/queries'
import { currencyNumber } from '@/utils'

import { SearchOutlined } from '@ant-design/icons'
import { CreateButton, DeleteButton, EditButton, FilterDropdown, List, useTable } from '@refinedev/antd'
import { getDefaultFilter, useGo } from '@refinedev/core'
import { Input, Space, Table } from 'antd'

export const CompanyList: React.FC = () => {
  const go = useGo()
  const { tableProps, filters } = useTable({
    resource: 'companies',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch: (values: any) => {
      return [
        {
          field: 'name',
          operator: 'contains',
          value: values?.name,
        },
      ]
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY,
    },
    pagination: {
      pageSize: 12,
    },
    sorters: {
      initial: [
        {
          field: 'createdAt',
          order: 'desc',
        },
      ],
    },
    filters: {
      initial: [
        {
          field: 'name',
          operator: 'contains',
          value: undefined,
        },
      ],
    },
  })

  const onClickCreate = (): void => {
    go({
      to: { resource: 'companies', action: 'create' },
      options: { keepQuery: true },
      type: 'replace',
    })
  }

  return (
    <List breadcrumb={false} headerButtons={() => <CreateButton onClick={onClickCreate} />}>
      <Table {...tableProps} pagination={{ ...tableProps.pagination }}>
        <Table.Column<Company>
          dataIndex={'name'}
          title={'Company Title'}
          defaultFilteredValue={getDefaultFilter('id', filters)}
          filterIcon={<SearchOutlined />}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input placeholder={'Search Company'} />
            </FilterDropdown>
          )}
          render={(value, record) => (
            <Space>
              <CustomAvatar shape={'square'} name={record.name} src={record.avatarUrl} />
              <Text style={{ whiteSpace: 'nowrap' }}>{record.name}</Text>
            </Space>
          )}
        />
        <Table.Column<Company>
          dataIndex={'totalRevenue'}
          title={'Open deals amount'}
          render={(value, company) => (
            <Text style={{ whiteSpace: 'nowrap' }}>
              {currencyNumber(company?.dealsAggregate?.[0]?.sum?.value ?? 0)}
            </Text>
          )}
        />
        <Table.Column<Company>
          dataIndex={'id'}
          title={'Actions'}
          render={(value) => (
            <Space>
              <EditButton hideText size={'small'} recordItemId={value} />
              <DeleteButton hideText size={'small'} recordItemId={value} />
            </Space>
          )}
        />
      </Table>
    </List>
  )
}

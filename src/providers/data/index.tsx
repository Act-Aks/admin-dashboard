import { GRAPHQL_CLIENT_URL, WS_CLIENT_URL } from '@/constants'

import graphqlDataProvider, { GraphQLClient, liveProvider as graphqlLiveProvider } from '@refinedev/nestjs-query'
import { createClient } from 'graphql-ws'

import { fetchWrapper } from './fetch-wrapper'

export const client = new GraphQLClient(GRAPHQL_CLIENT_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options)
    } catch (error) {
      return Promise.reject(error as Error)
    }
  },
})

export const wsClient =
  typeof window !== 'undefined'
    ? createClient({
        url: WS_CLIENT_URL,
        connectionParams: () => {
          const accessToken = localStorage.getItem('access_token')

          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        },
      })
    : undefined

export const dataProvider = graphqlDataProvider(client)
export const liveProvider = wsClient ? graphqlLiveProvider(wsClient) : undefined

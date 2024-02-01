import { useNotificationProvider } from '@refinedev/antd'
import '@refinedev/antd/dist/reset.css'
import { Authenticated, GitHubBanner, Refine } from '@refinedev/core'
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6'
import { App as AntdApp } from 'antd'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { Layout } from './components'
import { routes } from './constants'
import { ForgotPassword, Home, Login, Register } from './pages'
import { authProvider, dataProvider, liveProvider } from './providers'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: '2O6Rwx-XsM0K9-VpHHUG',
                liveMode: 'auto',
              }}
            >
              <Routes>
                <Route path={routes.register} element={<Register />} />
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.forgotPassword} element={<ForgotPassword />} />
                <Route
                  element={
                    <Authenticated key={'authenticated-layout'} fallback={<CatchAllNavigate to={routes.login} />}>
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }
                >
                  <Route index path={routes.home} element={<Home />} />
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App

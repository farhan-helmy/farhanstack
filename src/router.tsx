import {
    Route,
    rootRouteWithContext,
} from '@tanstack/react-router'

import {
    QueryClient,
} from '@tanstack/react-query'

import Root from './Root'
import IndexPage from './pages'

export const rootRoute = rootRouteWithContext<{
    queryClient: QueryClient
}>()({
    component: Root,
})

export const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: IndexPage,
})



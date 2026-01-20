import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()

  const router = createRouter({
    routeTree,
    context: {
      ...rqContext,
      ...TanstackQuery.getContext(),
    },
    Wrap: ({ children }) => {
      return (
        <TanstackQuery.Provider queryClient={rqContext.queryClient}>
          {children}
        </TanstackQuery.Provider>
      );
    },

    defaultPreload: "intent",
  });

  TanstackQuery.getContext().queryClient;


  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

  return router
}

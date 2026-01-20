import { useTRPC } from '@/integrations/trpc/react'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const trpc = useTRPC()

  const {data} = useQuery({
    ...trpc.todos.list.queryOptions()
  })

  return (
    <main>
      {
        data?.map((item) => (
          <p>{item.name}</p>
        ))
      }
    </main>
  )
}

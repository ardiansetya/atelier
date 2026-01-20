import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/men/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/men/"!</div>
}

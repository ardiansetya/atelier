import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/women/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/women/"!</div>
}

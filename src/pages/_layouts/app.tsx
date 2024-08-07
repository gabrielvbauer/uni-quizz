import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="min-h-full flex flex-1 flex-col bg-primary">
      <Outlet />
    </main>
  )
}

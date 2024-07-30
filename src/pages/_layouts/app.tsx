import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="h-screen px-6 py-7 flex flex-col bg-secondary">
      <Outlet />
    </main>
  )
}

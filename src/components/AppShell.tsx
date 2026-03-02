'use client'

import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container" style={{
      display: 'flex',
      minHeight: '100vh',
      padding: 'var(--space-lg)',
      gap: 'var(--space-lg)',
      maxWidth: '1920px',
      margin: '0 auto'
    }}>
      <Sidebar />
      <main className="main-content" style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)'
      }}>
        <TopBar />
        <div className="content-wrapper" style={{
          maxWidth: 'var(--content-max-width)',
          width: '100%'
        }}>
          {children}
        </div>
      </main>
    </div>
  )
}

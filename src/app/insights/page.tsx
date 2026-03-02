'use client'

import { AppShell } from '@/components/AppShell'
import { Panel } from '@/components/ui'

export default function InsightsPage() {
  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Insights</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Your learning analytics and progress tracking
          </p>
        </div>

        <Panel title="Coming Soon">
          <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <div style={{ fontSize: '64px', marginBottom: 'var(--space-lg)' }}>📊</div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Insights Dashboard</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              Track your learning progress, game completions, and financial literacy improvements.
            </p>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

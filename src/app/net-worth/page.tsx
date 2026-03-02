'use client'

import { AppShell } from '@/components/AppShell'
import { Panel } from '@/components/ui'

export default function NetWorthPage() {
  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Net Worth Calculator</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Calculate and track your total net worth over time
          </p>
        </div>

        <Panel title="Coming Soon">
          <div style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <div style={{ fontSize: '64px', marginBottom: 'var(--space-lg)' }}>💎</div>
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Net Worth Tracker</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              Track your assets, liabilities, and total net worth over time with detailed breakdowns and trend analysis.
            </p>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

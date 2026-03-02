'use client'

import { AppShell } from '@/components/AppShell'
import { Panel, Button } from '@/components/ui'

export default function BudgetingPage() {
  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Budgeting</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Plan and track your monthly budget
          </p>
        </div>

        <Panel title="Monthly Budget Calculator">
          <div style={{
            padding: 'var(--space-lg)',
            background: 'var(--glass-light)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-lg)'
          }}>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}>
                Monthly Income (after tax)
              </label>
              <input
                type="number"
                placeholder="5000"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: 'var(--font-size-base)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <label style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}>
                Fixed Costs (rent, insurance, loans)
              </label>
              <input
                type="number"
                placeholder="2000"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: 'var(--font-size-base)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <Button variant="primary">Calculate Budget</Button>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

'use client'

import { AppShell } from '@/components/AppShell'
import { Panel, Card, Button } from '@/components/ui'

export default function GoalsPage() {
  const goals = [
    {
      name: 'Emergency Fund',
      target: 10000,
      current: 6500,
      icon: '🛡️',
      deadline: '2026-12-31'
    },
    {
      name: 'House Deposit',
      target: 50000,
      current: 12000,
      icon: '🏠',
      deadline: '2028-06-30'
    },
    {
      name: 'Holiday Fund',
      target: 5000,
      current: 2800,
      icon: '✈️',
      deadline: '2026-11-30'
    }
  ]

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ marginBottom: 'var(--space-sm)' }}>Financial Goals</h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Set and track your financial goals
            </p>
          </div>
          <Button variant="primary">+ Add Goal</Button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-lg)'
        }}>
          {goals.map((goal) => {
            const percentage = (goal.current / goal.target) * 100
            return (
              <Card key={goal.name} variant="medium" padding="md">
                <div style={{ marginBottom: 'var(--space-md)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-sm)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    <span style={{ fontSize: '32px' }}>{goal.icon}</span>
                    <h3 style={{ margin: 0 }}>{goal.name}</h3>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-md)'
                  }}>
                    <span>${goal.current.toLocaleString()} saved</span>
                    <span>${goal.target.toLocaleString()} goal</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    <div style={{
                      width: `${percentage}%`,
                      height: '100%',
                      background: 'var(--accent-primary)',
                      transition: 'width 0.3s'
                    }} />
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--accent-primary)',
                    fontWeight: 600
                  }}>
                    {percentage.toFixed(0)}% complete
                  </div>
                </div>
                <div style={{
                  paddingTop: 'var(--space-md)',
                  borderTop: '1px solid var(--glass-border)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)'
                }}>
                  Target: {new Date(goal.deadline).toLocaleDateString('en-NZ', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}

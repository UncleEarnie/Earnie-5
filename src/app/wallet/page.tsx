'use client'

import { AppShell } from '@/components/AppShell'
import { Card, StatCard, Panel } from '@/components/ui'

export default function WalletPage() {
  const activities = [
    { date: '2026-03-02', description: 'Completed Risk Game', points: 10, type: 'earned' },
    { date: '2026-03-01', description: 'Daily Login Bonus', points: 5, type: 'earned' },
    { date: '2026-02-28', description: 'Uploaded Bank Statement', points: 15, type: 'earned' },
    { date: '2026-02-27', description: 'Launched Budget Calculator', points: -5, type: 'spent' },
    { date: '2026-02-26', description: 'Completed Compound Interest Game', points: 10, type: 'earned' }
  ]

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Header */}
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Wallet</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Track your Visibility Points balance and activity
          </p>
        </div>

        {/* Balance Card */}
        <Card variant="heavy" padding="lg">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                color: 'var(--text-secondary)'
              }}>
                Visibility Points Balance
              </div>
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)'
              }}>
                150
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                marginTop: 'var(--space-xs)'
              }}>
                Earn points by completing games and activities
              </div>
            </div>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(134, 239, 172, 0.2) 0%, transparent 70%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '56px'
            }}>
              💰
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-lg)'
        }}>
          <StatCard label="Total Earned" value="235" icon="⬆️" />
          <StatCard label="Total Spent" value="85" icon="⬇️" />
          <StatCard label="This Month" value="+45" icon="📅" />
        </div>

        {/* Activity Log */}
        <Panel title="Recent Activity">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)'
          }}>
            {activities.map((activity, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'var(--space-md)',
                  background: 'var(--glass-light)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: `3px solid ${activity.type === 'earned' ? 'var(--accent-primary)' : 'var(--danger)'}`
                }}
              >
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                  }}>
                    {activity.description}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-muted)'
                  }}>
                    {new Date(activity.date).toLocaleDateString('en-NZ', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 700,
                  color: activity.type === 'earned' ? 'var(--accent-primary)' : 'var(--danger)'
                }}>
                  {activity.type === 'earned' ? '+' : ''}{activity.points}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* How to Earn More */}
        <Panel title="How to Earn More Points">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-sm)' }}>🎮</div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Complete Games</h4>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Earn 5-15 points per game
              </p>
            </div>

            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-sm)' }}>📤</div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Upload Data</h4>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Earn 15 points per upload
              </p>
            </div>

            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ fontSize: '32px', marginBottom: 'var(--space-sm)' }}>📅</div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Daily Bonus</h4>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Earn 5 points for logging in
              </p>
            </div>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

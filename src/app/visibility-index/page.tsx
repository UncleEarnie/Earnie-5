'use client'

import { AppShell } from '@/components/AppShell'
import { Card, Chip, ProgressBar, Panel } from '@/components/ui'

export default function VisibilityIndexPage() {
  const pillars = [
    { name: 'Decision Clarity', score: 68, level: 'Steady', color: 'var(--accent-primary)' },
    { name: 'Steadiness Under Pressure', score: 79, level: 'Strong', color: 'var(--accent-primary)' },
    { name: 'Confidence Calibration', score: 61, level: 'Developing', color: 'var(--warning)' },
    { name: 'Resilience Style', score: 80, level: 'Strong', color: 'var(--accent-primary)' }
  ]

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Header */}
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Visibility Index™</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Your comprehensive view of financial risk awareness and decision-making capability
          </p>
        </div>

        {/* Overall Score Card */}
        <Card variant="heavy" padding="lg">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgba(134, 239, 172, 0.15) 0%, rgba(16, 24, 20, 0.8) 60%)',
                border: '1px solid rgba(134, 239, 172, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <div>
                  <div style={{
                    fontSize: '56px',
                    fontWeight: 700,
                    color: 'var(--accent-primary)'
                  }}>
                    67
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-muted)'
                  }}>
                    / 100
                  </div>
                </div>
              </div>
              <div style={{ 
                marginTop: 'var(--space-md)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                Risk Visibility: <strong style={{ color: 'var(--accent-primary)' }}>Hazy</strong>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: 'var(--space-lg)' }}>Your Four Pillars</h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'var(--space-md)' 
              }}>
                {pillars.map((pillar) => (
                  <div key={pillar.name}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{ 
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--text-primary)' 
                      }}>
                        {pillar.name}
                      </span>
                      <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'center' }}>
                        <span style={{
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: 600,
                          color: pillar.color
                        }}>
                          {pillar.score}
                        </span>
                        <Chip variant={pillar.level === 'Strong' ? 'accent' : pillar.level === 'Steady' ? 'accent' : 'warning'}>
                          {pillar.level}
                        </Chip>
                      </div>
                    </div>
                    <ProgressBar value={pillar.score} color={pillar.color} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* What Shaped Your Score */}
        <Panel title="What shaped your score">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            <Card variant="light" padding="md">
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <span style={{ fontSize: '28px', marginBottom: 'var(--space-xs)' }}>🎮</span>
              </div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Games Completed</h4>
              <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-primary)', margin: 0 }}>
                12
              </p>
            </Card>

            <Card variant="light" padding="md">
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <span style={{ fontSize: '28px', marginBottom: 'var(--space-xs)' }}>💳</span>
              </div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Transactions Analyzed</h4>
              <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-primary)', margin: 0 }}>
                248
              </p>
            </Card>

            <Card variant="light" padding="md">
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <span style={{ fontSize: '28px', marginBottom: 'var(--space-xs)' }}>📊</span>
              </div>
              <h4 style={{ marginBottom: 'var(--space-xs)' }}>Days Active</h4>
              <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--accent-primary)', margin: 0 }}>
                45
              </p>
            </Card>
          </div>
        </Panel>

        {/* What to Improve Next */}
        <Panel title="What to improve next">
          <div style={{
            padding: 'var(--space-md)',
            background: 'var(--glass-light)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--warning)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 'var(--space-md)' 
            }}>
              <span style={{ fontSize: '32px' }}>💡</span>
              <div>
                <h4 style={{ marginBottom: 'var(--space-sm)' }}>
                  Focus on Confidence Calibration
                </h4>
                <p style={{ 
                  fontSize: '13px', 
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-md)'
                }}>
                  Your Confidence Calibration pillar is developing. Play more risk-assessment games and review your spending patterns to build better intuition.
                </p>
                <button style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                  color: '#0a0f0d',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  Try Recommended Games
                </button>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

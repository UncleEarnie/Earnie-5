'use client'

import { AppShell } from '@/components/AppShell'
import { Card, StatCard, Chip, Button, Panel } from '@/components/ui'

export default function DashboardPage() {
  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Hero Panel with Visibility Index */}
        <section 
          className="hero-panel glass-heavy card"
          style={{
            padding: 'var(--space-2xl)',
            minHeight: '420px',
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 240px',
            gap: 'var(--space-xl)',
            alignItems: 'start'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(134, 239, 172, 0.05) 0%, rgba(10, 15, 13, 0.8) 100%)',
            borderRadius: 'inherit',
            zIndex: 1
          }} />
          
          {/* Main Content */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            zIndex: 2,
            gridColumn: 1,
            gridRow: 1
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              padding: '6px 14px',
              background: 'var(--glass-medium)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 600,
              color: 'var(--accent-primary)',
              width: 'fit-content',
              marginBottom: 'var(--space-md)'
            }}>
              ✨ Welcome Back
            </div>
            
            <h1 style={{
              fontSize: '36px',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 'var(--space-md)',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Clarity First. Resilience Always.<br />Move with Confidence.
            </h1>
            
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '480px'
            }}>
              Track your financial visibility, build better habits, and connect with trusted partners.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
              <Button variant="primary">Explore Games</Button>
              <Button variant="secondary">View Goals</Button>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-lg)',
            position: 'relative',
            zIndex: 3,
            gridColumn: 2,
            gridRow: 1
          }}>
            {/* Visibility Index Widget */}
            <Card variant="medium" padding="md">
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <h4 style={{ fontSize: 'var(--font-size-base)', marginBottom: '4px' }}>
                  Visibility Index™
                </h4>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px',
                marginBottom: 'var(--space-sm)',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--accent-primary)'
                }}>
                  67<span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>/100</span>
                </div>
              </div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                textAlign: 'center'
              }}>
                Risk Visibility: <strong style={{ color: 'var(--accent-primary)' }}>Hazy</strong>
              </div>
            </Card>
          </div>
        </section>

        {/* Uncle Earnie's Advice */}
        <Panel title="Uncle Earnie's Suggested Next Steps">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--space-md)' 
          }}>
            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--accent-primary)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 'var(--space-md)' 
              }}>
                <span style={{ fontSize: '24px' }}>🎮</span>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>
                    Your Confidence Calibration is developing
                  </h4>
                  <p style={{ 
                    fontSize: '13px', 
                    margin: 0, 
                    color: 'var(--text-secondary)' 
                  }}>
                    Try the Risk Game to practise adjusting decisions.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--accent-primary)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 'var(--space-md)' 
              }}>
                <span style={{ fontSize: '24px' }}>💰</span>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>
                    Cashflow shows spending is down 6%
                  </h4>
                  <p style={{ 
                    fontSize: '13px', 
                    margin: 0, 
                    color: 'var(--text-secondary)' 
                  }}>
                    Consider redirecting some into KiwiSaver or emergency fund.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              padding: 'var(--space-md)',
              background: 'var(--glass-light)',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid var(--accent-primary)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 'var(--space-md)' 
              }}>
                <span style={{ fontSize: '24px' }}>🛡️</span>
                <div>
                  <h4 style={{ marginBottom: '4px' }}>
                    Strong on resilience
                  </h4>
                  <p style={{ 
                    fontSize: '13px', 
                    margin: 0, 
                    color: 'var(--text-secondary)' 
                  }}>
                    Review your insurance to ensure you are protected if the unexpected happens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>

        {/* Quick Actions */}
        <div>
          <h3 style={{ marginBottom: 'var(--space-lg)' }}>Quick Actions</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            <Card variant="light" padding="md">
              <h4 style={{ marginBottom: 'var(--space-sm)' }}>Switch your KiwiSaver</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Find a better fit and maximise returns
              </p>
              <Button variant="primary" size="sm">Get started</Button>
            </Card>

            <Card variant="light" padding="md">
              <h4 style={{ marginBottom: 'var(--space-sm)' }}>Review insurance</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Better cover for less
              </p>
              <Button variant="primary" size="sm">Review cover</Button>
            </Card>

            <Card variant="light" padding="md">
              <h4 style={{ marginBottom: 'var(--space-sm)' }}>Upload bank statements</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                Get personalized insights
              </p>
              <Button variant="primary" size="sm">Upload CSV</Button>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

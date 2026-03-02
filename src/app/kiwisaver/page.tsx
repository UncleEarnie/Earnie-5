'use client'

import { AppShell } from '@/components/AppShell'
import { Card, Button, Panel } from '@/components/ui'

export default function KiwiSaverPage() {
  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Header */}
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>KiwiSaver</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Understand your retirement savings and find the best fund for your goals
          </p>
        </div>

        {/* Balance Overview */}
        <Card variant="heavy" padding="lg">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                color: 'var(--text-secondary)'
              }}>
                Current Balance
              </div>
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                marginBottom: 'var(--space-md)'
              }}>
                $42,580
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--accent-primary)'
              }}>
                ↑ 8.2% this year
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                color: 'var(--text-secondary)'
              }}>
                Projected at Retirement (Age 65)
              </div>
              <div style={{
                fontSize: 'var(--font-size-3xl)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-md)'
              }}>
                $486,000
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                Based on current contributions
              </div>
            </div>
          </div>
        </Card>

        {/* Contributions */}
        <Panel title="Your Contributions">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                marginBottom: '4px'
              }}>
                Your Contribution
              </div>
              <div style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)'
              }}>
                6%
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                $450/month
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                marginBottom: '4px'
              }}>
                Employer Contribution
              </div>
              <div style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)'
              }}>
                3%
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                $225/month
              </div>
            </div>

            <div>
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
                marginBottom: '4px'
              }}>
                Govt Contribution
              </div>
              <div style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)'
              }}>
                $521
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                Annual member tax credit
              </div>
            </div>
          </div>
        </Panel>

        {/* Fund Information */}
        <Panel title="Your Current Fund">
          <div style={{
            padding: 'var(--space-lg)',
            background: 'var(--glass-light)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 'var(--space-lg)'
            }}>
              <div>
                <h3 style={{ marginBottom: 'var(--space-xs)' }}>Balanced Fund</h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Provider: Example KiwiSaver Ltd
                </p>
              </div>
              <Button variant="secondary" size="sm">Switch Fund</Button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--space-lg)',
              paddingTop: 'var(--space-lg)',
              borderTop: '1px solid var(--glass-border)'
            }}>
              <div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)',
                  marginBottom: '4px'
                }}>
                  Annual Fee
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}>
                  1.12%
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)',
                  marginBottom: '4px'
                }}>
                  5 Year Return
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  color: 'var(--accent-primary)'
                }}>
                  7.8% p.a.
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)',
                  marginBottom: '4px'
                }}>
                  Risk Level
                </div>
                <div style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 600,
                  color: 'var(--warning)'
                }}>
                  Medium
                </div>
              </div>
            </div>
          </div>
        </Panel>

        {/* Partner CTAs */}
        <Panel title="Get Expert Advice">
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-lg)'
          }}>
            Connect with trusted advisers to review your KiwiSaver and find the right fund for your situation.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            <Card variant="light" padding="md">
              <h4 style={{ marginBottom: 'var(--space-sm)' }}>Compare providers</h4>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)'
              }}>
                See fees, returns, and investment options side by side.
              </p>
              <Button variant="primary" size="sm">Compare now</Button>
            </Card>

            <Card variant="light" padding="md">
              <h4 style={{ marginBottom: 'var(--space-sm)' }}>Talk to an adviser</h4>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)'
              }}>
                Get personalized recommendations from qualified experts.
              </p>
              <Button variant="primary" size="sm">Book consultation</Button>
            </Card>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

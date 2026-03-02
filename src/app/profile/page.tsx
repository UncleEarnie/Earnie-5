'use client'

import { AppShell } from '@/components/AppShell'
import { Card, Button, Chip } from '@/components/ui'
import { useAuth } from '@/lib/auth'

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Header */}
        <div>
          <h1 style={{ marginBottom: 'var(--space-sm)' }}>Profile</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
            Manage your account settings and preferences
          </p>
        </div>

        {/* User Info Card */}
        <Card variant="heavy" padding="lg">
          <div style={{ 
            display: 'flex', 
            gap: 'var(--space-xl)',
            alignItems: 'flex-start'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
              flexShrink: 0
            }}>
              👤
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-md)'
              }}>
                <h2 style={{ margin: 0 }}>
                  {user?.user_metadata?.full_name || 'User'}
                </h2>
                <Chip variant="accent">Demo Status</Chip>
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: 'var(--space-md)' 
              }}>
                {user?.email}
              </p>
              <div style={{ 
                display: 'flex', 
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}>
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    Member Since
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>
                    {new Date(user?.created_at || Date.now()).toLocaleDateString('en-NZ', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
                <div style={{
                  width: '1px',
                  background: 'var(--glass-border)'
                }} />
                <div>
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-muted)',
                    marginBottom: '4px'
                  }}>
                    Visibility Points
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 600,
                    color: 'var(--accent-primary)'
                  }}>
                    150
                  </div>
                </div>
              </div>
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card variant="medium" padding="lg">
          <h3 style={{ marginBottom: 'var(--space-lg)' }}>Preferences</h3>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--space-lg)' 
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <div>
                <h4 style={{ marginBottom: '4px' }}>Email Notifications</h4>
                <p style={{ 
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Receive updates about your progress and recommendations
                </p>
              </div>
              <label style={{
                position: 'relative',
                display: 'inline-block',
                width: '50px',
                height: '28px'
              }}>
                <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'var(--accent-primary)',
                  transition: '0.4s',
                  borderRadius: '28px'
                }} />
              </label>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--glass-border)'
            }}>
              <div>
                <h4 style={{ marginBottom: '4px' }}>Data Sharing</h4>
                <p style={{ 
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Share anonymized data to improve the platform
                </p>
              </div>
              <label style={{
                position: 'relative',
                display: 'inline-block',
                width: '50px',
                height: '28px'
              }}>
                <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'var(--glass-medium)',
                  transition: '0.4s',
                  borderRadius: '28px'
                }} />
              </label>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h4 style={{ marginBottom: '4px' }}>Weekly Insights</h4>
                <p style={{ 
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  Get a weekly summary of your financial activity
                </p>
              </div>
              <label style={{
                position: 'relative',
                display: 'inline-block',
                width: '50px',
                height: '28px'
              }}>
                <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'var(--accent-primary)',
                  transition: '0.4s',
                  borderRadius: '28px'
                }} />
              </label>
            </div>
          </div>
        </Card>

        {/* Verification Status */}
        <Card variant="medium" padding="lg">
          <h3 style={{ marginBottom: 'var(--space-lg)' }}>Verification & KYC</h3>
          <div style={{
            padding: 'var(--space-lg)',
            background: 'var(--glass-light)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>🔒</div>
            <h4 style={{ marginBottom: 'var(--space-sm)' }}>Demo Account</h4>
            <p style={{ 
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-md)'
            }}>
              This is a demonstration account. Full verification features will be available in production.
            </p>
            <Chip variant="warning">Demo Mode</Chip>
          </div>
        </Card>
      </div>
    </AppShell>
  )
}

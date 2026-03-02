'use client'

import { AppShell } from '@/components/AppShell'
import { Card, Button, Panel, Chip } from '@/components/ui'
import { useState } from 'react'

export default function FinancesPage() {
  const [showUpload, setShowUpload] = useState(false)

  const accounts = [
    { name: 'Everyday Account', balance: 3240.50, type: 'Transaction', color: 'var(--accent-primary)' },
    { name: 'Savings', balance: 12850.00, type: 'Savings', color: 'var(--accent-secondary)' },
    { name: 'Credit Card', balance: -1240.30, type: 'Credit', color: 'var(--danger)' }
  ]

  const categories = [
    { name: 'Groceries', amount: 650, percentage: 30, color: 'rgba(134, 239, 172, 0.8)' },
    { name: 'Transport', amount: 280, percentage: 13, color: 'rgba(134, 239, 172, 0.6)' },
    { name: 'Entertainment', amount: 420, percentage: 19, color: 'rgba(134, 239, 172, 0.4)' },
    { name: 'Bills', amount: 820, percentage: 38, color: 'rgba(134, 239, 172, 0.2)' }
  ]

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div>
            <h1 style={{ marginBottom: 'var(--space-sm)' }}>Finances</h1>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Track your accounts, spending, and financial health
            </p>
          </div>
          <Button variant="primary" onClick={() => setShowUpload(!showUpload)}>
            📤 Upload CSV
          </Button>
        </div>

        {/* Upload Section */}
        {showUpload && (
          <Card variant="medium" padding="lg">
            <h3 style={{ marginBottom: 'var(--space-md)' }}>Upload Bank Statements</h3>
            <p style={{ 
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-lg)'
            }}>
              Upload your bank statements in CSV format to analyze your spending and get personalized insights.
            </p>
            <div style={{
              border: '2px dashed var(--glass-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl)',
              textAlign: 'center',
              background: 'var(--glass-light)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>📄</div>
              <p style={{ 
                fontSize: 'var(--font-size-base)', 
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-md)'
              }}>
                Drag and drop your CSV file here, or click to browse
              </p>
              <Button variant="primary" size="sm">Choose File</Button>
            </div>
          </Card>
        )}

        {/* Net Worth Header */}
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
                Total Net Worth
              </div>
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 700,
                color: 'var(--accent-primary)'
              }}>
                $14,850.20
              </div>
              <div style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--accent-primary)',
                marginTop: '4px'
              }}>
                ↑ 5.2% from last month
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
              fontSize: '48px'
            }}>
              💰
            </div>
          </div>
        </Card>

        {/* Account Tiles */}
        <div>
          <h3 style={{ marginBottom: 'var(--space-lg)' }}>Your Accounts</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {accounts.map((account) => (
              <Card key={account.name} variant="medium" padding="md">
                <div style={{ marginBottom: 'var(--space-sm)' }}>
                  <Chip variant={account.balance < 0 ? 'danger' : 'accent'}>
                    {account.type}
                  </Chip>
                </div>
                <h4 style={{ marginBottom: 'var(--space-xs)' }}>{account.name}</h4>
                <p style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 700,
                  color: account.balance < 0 ? 'var(--danger)' : account.color,
                  margin: 0
                }}>
                  ${Math.abs(account.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Spending Categories */}
        <Panel title="Spending by Category (This Month)">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--space-lg)' 
          }}>
            {categories.map((cat) => (
              <div key={cat.name}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <span style={{ color: 'var(--text-primary)' }}>{cat.name}</span>
                  <span style={{ 
                    fontWeight: 600,
                    color: 'var(--accent-primary)' 
                  }}>
                    ${cat.amount} ({cat.percentage}%)
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${cat.percentage}%`,
                    height: '100%',
                    background: cat.color,
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Connect Providers (CSV-only UI) */}
        <Panel title="Connect Your Accounts">
          <p style={{ 
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-lg)'
          }}>
            Currently, Uncle Earnie supports CSV upload. Upload your bank statements to get started.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            {['ANZ', 'ASB', 'BNZ', 'Westpac', 'Kiwibank'].map((bank) => (
              <div
                key={bank}
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--glass-light)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  opacity: 0.6,
                  cursor: 'not-allowed'
                }}
              >
                <div style={{ 
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 600,
                  color: 'var(--text-muted)'
                }}>
                  {bank}
                </div>
                <div style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--text-muted)',
                  marginTop: '4px'
                }}>
                  CSV only
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}

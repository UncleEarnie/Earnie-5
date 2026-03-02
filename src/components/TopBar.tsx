'use client'

import { useAuth } from '@/lib/auth'
import { useState } from 'react'

export function TopBar() {
  const { user, signOut } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="topbar" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-lg)'
    }}>
      <div className="topbar-left" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)'
      }}>
        <button 
          className="btn-icon menu-toggle"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            padding: '10px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--glass-light)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
      <div className="topbar-right" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)'
      }}>
        <div className="visibility-points" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          padding: '8px 16px',
          background: 'var(--glass-light)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 600,
          color: 'var(--accent-primary)'
        }}>
          <span>Visibility Points: <strong>150</strong></span>
        </div>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              padding: '8px 16px',
              background: 'var(--glass-light)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <span>Logged in as {user?.user_metadata?.full_name || user?.email || 'User'}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {showMenu && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              minWidth: '200px',
              background: 'var(--glass-heavy)',
              border: '1px solid var(--glass-border)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 1000
            }}>
              <button
                onClick={handleSignOut}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: 'var(--space-md)',
                  color: 'var(--text-primary)',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '13px',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                🚪 Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

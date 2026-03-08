'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { AppShell } from '@/components/AppShell'
import { Card, Button } from '@/components/ui'

interface GameModalProps {
  isOpen: boolean
  onClose: () => void
}

function GameModal({ isOpen, onClose }: GameModalProps) {
  const [iframeHeight, setIframeHeight] = useState(600)

  useEffect(() => {
    if (!isOpen) return

    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'MORTGAGE_MAZE_HEIGHT') {
        setIframeHeight(event.data.height + 40)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--bg-primary)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          maxWidth: '1100px',
          width: '90%',
          maxHeight: '85vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.3s ease-out',
        }}
      >
        <div
          style={{
            padding: 'var(--space-lg)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: 'var(--accent-primary)', margin: 0 }}>Mortgage Maze</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '24px',
              padding: '0',
              lineHeight: '1',
            }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: 'var(--space-lg)',
          }}
        >
          <iframe
            src="/games/mortgage-maze/index.html"
            title="Mortgage Maze Game"
            style={{
              width: '100%',
              height: iframeHeight,
              border: 'none',
              borderRadius: 'var(--radius-sm)',
            }}
            sandbox={{
              toString: () =>
                'allow-scripts allow-same-origin allow-forms allow-popups',
            } as any}
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [gameModalOpen, setGameModalOpen] = useState(false)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/auth/login')
      }
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: 'var(--text-primary)',
        }}
      >
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <AppShell>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        {/* Hero Section */}
        <section
          className="hero-panel glass-heavy card"
          style={{
            padding: 'var(--space-2xl)',
            minHeight: '300px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <h1 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-md)', fontSize: '32px' }}>
            Welcome to Uncle Earnie
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '18px', lineHeight: '1.6' }}>
            Explore financial education games, track your progress, and build confidence in your decisions.
          </p>
        </section>

        {/* Games Section */}
        <section>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-lg)', fontSize: '24px' }}>
            Interactive Games
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {/* Mortgage Maze Card */}
            <div
              style={{
                background: 'var(--glass-medium)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span style={{ fontSize: '32px', marginRight: 'var(--space-md)' }}>🏠</span>
                <h3 style={{ color: 'var(--accent-primary)', margin: 0, fontSize: '20px' }}>Mortgage Maze</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', flex: 1 }}>
                Navigate mortgage decisions in a fog of war. Face shocks, gather information, and discover your
                financial visibility score.
              </p>
              <button
                onClick={() => setGameModalOpen(true)}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  background: 'var(--accent-primary)',
                  color: 'var(--bg-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  fontSize: '14px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-secondary)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Play Now →
              </button>
            </div>

            {/* Coming Soon Card */}
            <div
              style={{
                background: 'var(--glass-light)',
                border: '1px dashed var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                opacity: 0.6,
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: 'var(--space-md)' }}>🔮</span>
              <h3 style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '18px' }}>More Games Coming Soon</h3>
              <p style={{ color: 'var(--text-tertiary)', marginTop: 'var(--space-sm)', fontSize: '14px' }}>
                We're building more interactive experiences to help you master your finances.
              </p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section
          style={{
            background: 'var(--glass-medium)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
          }}
        >
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-md)' }}>💡 Quick Tips</h3>
          <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              💰 <strong>Start with Mortgage Maze</strong> to understand key mortgage decisions
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              📊 <strong>Check your dashboard</strong> to track your financial visibility over time
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              🎯 <strong>Play both modes</strong> to explore quick decisions and deep scenarios
            </li>
            <li>🔄 <strong>Replay games</strong> with different choices to see how they affect your score</li>
          </ul>
        </section>
      </div>

      {/* Game Modal */}
      <GameModal isOpen={gameModalOpen} onClose={() => setGameModalOpen(false)} />
    </AppShell>
  )
}

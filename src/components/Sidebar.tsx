'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/dashboard', icon: '🏠' },
  { label: 'Profile', href: '/profile', icon: '👤' },
  { label: 'Wallet', href: '/wallet', icon: '💰' },
  { label: 'Finances', href: '/finances', icon: '💳' },
  { label: 'Insights', href: '/insights', icon: '📊' },
  { label: 'Visibility Index', href: '/visibility-index', icon: '👁️' },
  { label: 'Budgeting', href: '/budgeting', icon: '🧮' },
  { label: 'KiwiSaver', href: '/kiwisaver', icon: '🥝' },
  { label: 'Net Worth', href: '/net-worth', icon: '💎' },
  { label: 'Goals', href: '/goals', icon: '🎯' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="sidebar glass">
      <div className="sidebar-inner" style={{ padding: 'var(--space-lg)' }}>
        <div className="sidebar-brand" style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{ 
            fontSize: 'var(--font-size-xl)', 
            color: 'var(--accent-primary)',
            marginBottom: '4px'
          }}>
            Uncle Earnie
          </h2>
          <p style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--text-muted)',
            margin: 0
          }}>
            Financial Education
          </p>
        </div>
        <nav>
          <ul className="sidebar-nav" style={{ listStyle: 'none' }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href} style={{ marginBottom: '4px' }}>
                  <Link
                    href={item.href}
                    className={isActive ? 'active' : ''}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      padding: '12px var(--space-md)',
                      fontSize: 'var(--font-size-sm)',
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--glass-medium)' : 'transparent',
                      borderRadius: 'var(--radius-md)',
                      transition: 'all 0.2s',
                      position: 'relative',
                    }}
                  >
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        bottom: '8px',
                        width: '3px',
                        background: 'var(--accent-primary)',
                        borderRadius: '0 2px 2px 0',
                      }} />
                    )}
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

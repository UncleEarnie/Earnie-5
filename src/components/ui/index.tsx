import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'light' | 'medium' | 'heavy'
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({ children, className = '', variant = 'medium', padding = 'lg' }: CardProps) {
  const variantClass = {
    light: 'glass-light',
    medium: 'glass-medium',
    heavy: 'glass-heavy'
  }[variant]

  const paddingValue = {
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)'
  }[padding]

  return (
    <div 
      className={`card ${variantClass} ${className}`}
      style={{
        padding: paddingValue,
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {children}
    </div>
  )
}

interface StatCardProps {
  label: string
  value: string | number
  icon?: string
  trend?: {
    value: number
    label: string
  }
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <Card variant="medium" padding="md">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            color: 'var(--text-secondary)'
          }}>
            {label}
          </div>
          <div style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 700,
            color: 'var(--accent-primary)'
          }}>
            {value}
          </div>
          {trend && (
            <div style={{
              fontSize: 'var(--font-size-xs)',
              color: trend.value >= 0 ? 'var(--accent-primary)' : 'var(--danger)',
              marginTop: '4px'
            }}>
              {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
            </div>
          )}
        </div>
        {icon && (
          <span style={{ fontSize: '36px' }}>{icon}</span>
        )}
      </div>
    </Card>
  )
}

interface ChipProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'warning' | 'danger'
}

export function Chip({ children, variant = 'default' }: ChipProps) {
  const colors = {
    default: {
      background: 'var(--glass-light)',
      border: 'var(--glass-border)',
      color: 'var(--text-secondary)'
    },
    accent: {
      background: 'var(--accent-muted)',
      border: 'rgba(134, 239, 172, 0.3)',
      color: 'var(--accent-primary)'
    },
    warning: {
      background: 'var(--warning-muted)',
      border: 'rgba(251, 191, 36, 0.3)',
      color: 'var(--warning)'
    },
    danger: {
      background: 'var(--danger-muted)',
      border: 'rgba(252, 165, 165, 0.3)',
      color: 'var(--danger)'
    }
  }

  const style = colors[variant]

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 600,
      borderRadius: 'var(--radius-full)',
      background: style.background,
      border: `1px solid ${style.border}`,
      color: style.color,
      whiteSpace: 'nowrap'
    }}>
      {children}
    </span>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) {
  const baseStyles = {
    border: 'none',
    borderRadius: 'var(--radius-md)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: 'inherit'
  }

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
      color: '#0a0f0d',
      border: 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--glass-border)'
    }
  }

  const sizeStyles = {
    sm: { padding: '8px 16px', fontSize: 'var(--font-size-sm)' },
    md: { padding: '12px 24px', fontSize: 'var(--font-size-base)' },
    lg: { padding: '14px 28px', fontSize: 'var(--font-size-md)' }
  }

  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size]
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export function ProgressBar({ value, max = 100, color = 'var(--accent-primary)' }: { value: number, max?: number, color?: string }) {
  const percentage = (value / max) * 100

  return (
    <div style={{
      width: '100%',
      height: '8px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        background: color,
        transition: 'width 0.3s'
      }} />
    </div>
  )
}

export function Panel({ children, title }: { children: React.ReactNode, title?: string }) {
  return (
    <Card variant="medium">
      {title && (
        <h3 style={{ marginBottom: 'var(--space-lg)' }}>{title}</h3>
      )}
      {children}
    </Card>
  )
}

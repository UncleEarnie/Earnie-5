'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'
import { Button } from '@/components/ui'

export default function LoginPage() {
  const router = useRouter()
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signIn(email, password)
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-lg)'
    }}>
      <div className="glass-medium" style={{
        width: '100%',
        maxWidth: '400px',
        padding: 'var(--space-2xl)',
        borderRadius: 'var(--radius-xl)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          <h1 style={{ 
            color: 'var(--accent-primary)', 
            marginBottom: 'var(--space-xs)' 
          }}>
            Uncle Earnie
          </h1>
          <p style={{ 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--text-muted)',
            margin: 0
          }}>
            Financial Education
          </p>
        </div>

        <h2 style={{ 
          fontSize: 'var(--font-size-2xl)', 
          marginBottom: 'var(--space-lg)',
          textAlign: 'center'
        }}>
          Sign In
        </h2>

        {error && (
          <div style={{
            padding: 'var(--space-md)',
            background: 'var(--danger-muted)',
            border: '1px solid rgba(252, 165, 165, 0.3)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--danger)',
            fontSize: 'var(--font-size-sm)',
            marginBottom: 'var(--space-lg)'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <label 
              htmlFor="email" 
              style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--glass-light)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <label 
              htmlFor="password" 
              style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xs)'
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--glass-light)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontSize: 'var(--font-size-base)',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            style={{ width: '100%', marginBottom: 'var(--space-md)' }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p style={{ 
          textAlign: 'center', 
          fontSize: 'var(--font-size-sm)',
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          Don't have an account?{' '}
          <a 
            href="/auth/signup" 
            style={{ color: 'var(--accent-primary)', fontWeight: 600 }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

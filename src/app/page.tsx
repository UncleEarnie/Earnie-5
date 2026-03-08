'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth'

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/home')
      } else {
        router.push('/auth/login')
      }
    }
  }, [user, loading, router])

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
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-md)' }}>Uncle Earnie</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Loading...</p>
      </div>
    </div>
  )
}

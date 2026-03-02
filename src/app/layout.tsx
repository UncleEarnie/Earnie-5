import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Uncle Earnie - Financial Education',
  description: 'Clarity First. Resilience Always. Move with Confidence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

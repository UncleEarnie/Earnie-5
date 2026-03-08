import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client with fallback for build time when env vars aren't available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
          visibility_points: number
        }
        Insert: {
          id: string
          email: string
          full_name: string
          visibility_points?: number
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          visibility_points?: number
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          date: string
          description: string
          amount: number
          category: string
          created_at: string
        }
      }
      consents: {
        Row: {
          id: string
          user_id: string
          consent_type: string
          granted: boolean
          created_at: string
        }
      }
    }
  }
}

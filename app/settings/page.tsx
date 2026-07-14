'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useAuth } from '@/hooks/useAuth'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export default function Settings() {
  const { theme, setTheme } = useTheme()
  const { user } = useAuth()
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <MainLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-foreground/70">Customize your learning experience</p>
        </div>

        {/* Account Settings */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Account</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <p className="px-3 py-2 bg-muted text-foreground rounded">{user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">User ID</label>
              <p className="px-3 py-2 bg-muted text-foreground text-sm rounded">{user?.id}</p>
            </div>
          </div>
        </Card>

        {/* Learning Settings */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Learning Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Daily Goal (cards)</label>
              <input
                type="number"
                defaultValue="20"
                min="1"
                max="1000"
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Default Difficulty Level</label>
              <select className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="notifications" defaultChecked className="cursor-pointer" />
              <label htmlFor="notifications" className="text-sm font-medium text-foreground cursor-pointer">
                Enable daily notifications
              </label>
            </div>
          </div>
        </Card>

        {/* Appearance Settings */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Theme</label>
              <select
                value={theme || 'system'}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Data & Privacy */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Data & Privacy</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              📥 Export Learning Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              🗑️ Clear All Progress
            </Button>
            {/* TODO: Add GDPR compliance options */}
          </div>
        </Card>

        {/* About */}
        <Card className="p-6 bg-card border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">About</h3>
          <div className="space-y-2 text-sm text-foreground/70">
            <p>Sakura AI - Japanese Learning Platform</p>
            <p>Version 1.0.0</p>
            <p>Powered by FSRS algorithm and Vercel AI</p>
          </div>
        </Card>

        {/* Save & Logout */}
        <div className="flex gap-2 pt-4">
          <Button onClick={() => setSaving(true)} className="flex-1 bg-primary text-primary-foreground">
            Save Changes
          </Button>
          <Button onClick={handleLogout} variant="destructive" className="flex-1">
            Sign Out
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

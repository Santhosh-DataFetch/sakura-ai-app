'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Welcome back, {user?.email?.split('@')[0]}!</h1>
          <p className="text-foreground/70">Continue your Japanese learning journey. You&apos;re doing great!</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl mb-2">🔥</div>
            <p className="text-foreground/60 text-sm">Daily Streak</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-foreground/60 text-sm">Kanji Learned</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl mb-2">📖</div>
            <p className="text-foreground/60 text-sm">Vocabulary</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-6 text-center bg-card border-border">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-foreground/60 text-sm">Study Time</p>
            <p className="text-2xl font-bold text-primary">0m</p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/kanji">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">🈴</div>
              <h3 className="font-semibold text-foreground mb-1">Review Kanji</h3>
              <p className="text-sm text-foreground/60">0 cards due today</p>
            </Card>
          </Link>

          <Link href="/vocabulary">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-semibold text-foreground mb-1">Review Vocabulary</h3>
              <p className="text-sm text-foreground/60">0 cards due today</p>
            </Card>
          </Link>

          <Link href="/ai-tutor">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-semibold text-foreground mb-1">Chat with AI Tutor</h3>
              <p className="text-sm text-foreground/60">Get personalized help</p>
            </Card>
          </Link>

          <Link href="/conversation">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold text-foreground mb-1">Practice Conversation</h3>
              <p className="text-sm text-foreground/60">Start a new conversation</p>
            </Card>
          </Link>

          <Link href="/dictionary">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-semibold text-foreground mb-1">Dictionary</h3>
              <p className="text-sm text-foreground/60">Look up words</p>
            </Card>
          </Link>

          <Link href="/progress">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border cursor-pointer">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-semibold text-foreground mb-1">View Progress</h3>
              <p className="text-sm text-foreground/60">Track your growth</p>
            </Card>
          </Link>
        </div>

        {/* TODO: Add learning tips, recent activity, recommendations */}
        <div className="text-center text-foreground/60 text-sm p-4">
          <p>TODO: Add personalized learning recommendations and activity feed</p>
        </div>
      </div>
    </MainLayout>
  )
}

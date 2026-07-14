'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'

export default function Progress() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Learning Progress</h1>
          <p className="text-foreground/70">Track your Japanese learning journey</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Total Study Time</p>
            <p className="text-2xl font-bold text-primary">0h</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Daily Streak</p>
            <p className="text-2xl font-bold text-accent">0 days</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Total Reviews</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Accuracy Rate</p>
            <p className="text-2xl font-bold text-green-500">0%</p>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Study Time Chart */}
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-foreground mb-4">Weekly Study Time</h3>
            <div className="h-48 flex items-center justify-center">
              <p className="text-foreground/60">TODO: Add chart component</p>
            </div>
          </Card>

          {/* Review Stats */}
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-foreground mb-4">Reviews by Type</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Kanji Reviews</span>
                  <span className="text-sm font-semibold text-primary">0</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-0" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Vocabulary Reviews</span>
                  <span className="text-sm font-semibold text-accent">0</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-0" />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-foreground">Conversations</span>
                  <span className="text-sm font-semibold text-green-500">0</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-0" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Kanji Progress */}
        <Card className="p-6 bg-card border-border">
          <h3 className="font-semibold text-foreground mb-4">Kanji Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">New</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Learning</p>
              <p className="text-2xl font-bold text-accent">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Review</p>
              <p className="text-2xl font-bold text-blue-500">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Mastered</p>
              <p className="text-2xl font-bold text-green-500">0</p>
            </div>
          </div>
        </Card>

        {/* Vocabulary Progress */}
        <Card className="p-6 bg-card border-border">
          <h3 className="font-semibold text-foreground mb-4">Vocabulary Progress</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">New</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Learning</p>
              <p className="text-2xl font-bold text-accent">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Review</p>
              <p className="text-2xl font-bold text-blue-500">0</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground/60 mb-1">Mastered</p>
              <p className="text-2xl font-bold text-green-500">0</p>
            </div>
          </div>
        </Card>

        {/* TODO: Add historical data, export functionality */}
        <div className="text-center text-foreground/60 text-sm p-4">
          <p>TODO: Add historical data visualization and export options</p>
        </div>
      </div>
    </MainLayout>
  )
}

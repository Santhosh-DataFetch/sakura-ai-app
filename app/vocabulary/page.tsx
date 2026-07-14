'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Vocabulary() {
  const [activeTab, setActiveTab] = useState<'review' | 'browse' | 'add'>('review')

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Vocabulary</h1>
          <p className="text-foreground/70">Build your Japanese vocabulary with spaced repetition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Total Words</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Due Today</p>
            <p className="text-2xl font-bold text-accent">0</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Learning</p>
            <p className="text-2xl font-bold text-primary">0</p>
          </Card>
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Mastered</p>
            <p className="text-2xl font-bold text-green-500">0</p>
          </Card>
        </div>

        <div className="flex gap-2 border-b border-border">
          <button
            onClick={() => setActiveTab('review')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'review'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Review Cards
          </button>
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'browse'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'add'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Add Word
          </button>
        </div>

        {activeTab === 'review' && (
          <Card className="p-8 bg-card border-border text-center">
            <p className="text-foreground/60 mb-4">No vocabulary to review today!</p>
            <Button onClick={() => setActiveTab('add')} className="bg-primary text-primary-foreground">
              Add First Word
            </Button>
          </Card>
        )}

        {activeTab === 'browse' && (
          <Card className="p-6 bg-card border-border">
            <p className="text-foreground/60">No vocabulary added yet.</p>
          </Card>
        )}

        {activeTab === 'add' && (
          <Card className="p-6 bg-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Add New Word</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Japanese Word</label>
                <input type="text" placeholder="e.g. 猫" className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Reading (Hiragana)</label>
                <input type="text" placeholder="e.g. ねこ" className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Meaning</label>
                <input type="text" placeholder="e.g. cat" className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Example Sentence</label>
                <textarea placeholder="e.g. 私は猫が好きです。" rows={3} className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground">Add Word</Button>
            </div>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

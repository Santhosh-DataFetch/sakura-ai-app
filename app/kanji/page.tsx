'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function KanjiSRS() {
  const [activeTab, setActiveTab] = useState<'review' | 'browse' | 'add'>('review')

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Kanji SRS</h1>
          <p className="text-foreground/70">Master kanji characters with spaced repetition</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-card border-border">
            <p className="text-sm text-foreground/60 mb-1">Total Kanji</p>
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

        {/* Tabs */}
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
            Browse Kanji
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'add'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            Add Kanji
          </button>
        </div>

        {/* Review Tab */}
        {activeTab === 'review' && (
          <div className="space-y-4">
            <Card className="p-8 bg-card border-border text-center">
              <p className="text-foreground/60 mb-4">No kanji to review today!</p>
              <p className="text-foreground/60 text-sm mb-6">Add some kanji to get started with spaced repetition</p>
              <Button onClick={() => setActiveTab('add')} className="bg-primary text-primary-foreground">
                Add First Kanji
              </Button>
            </Card>
            {/* TODO: Implement flashcard review with FSRS algorithm */}
          </div>
        )}

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-4">
            <Card className="p-6 bg-card border-border">
              <p className="text-foreground/60">No kanji added yet. Start by adding some kanji to your study list.</p>
            </Card>
            {/* TODO: Display browse view of user's kanji */}
          </div>
        )}

        {/* Add Tab */}
        {activeTab === 'add' && (
          <div className="space-y-4">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Add New Kanji</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Kanji Character</label>
                  <input
                    type="text"
                    placeholder="Enter kanji (e.g. 日)"
                    className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Meaning</label>
                  <input
                    type="text"
                    placeholder="Enter meaning (e.g. sun, day)"
                    className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">On Reading</label>
                    <input
                      type="text"
                      placeholder="e.g. ニチ"
                      className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Kun Reading</label>
                    <input
                      type="text"
                      placeholder="e.g. ひ"
                      className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground">Add Kanji</Button>
              </div>
            </Card>
            {/* TODO: Add API integration to save kanji */}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

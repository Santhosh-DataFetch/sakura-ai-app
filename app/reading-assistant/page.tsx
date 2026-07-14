'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ReadingAssistant() {
  const [text, setText] = useState('')
  const [annotations, setAnnotations] = useState<any[]>([])

  const analyzeText = () => {
    // TODO: Send text to AI for analysis and furigana generation
    // TODO: Highlight difficult kanji and vocabulary
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Reading Assistant</h1>
          <p className="text-foreground/70">Analyze Japanese text with furigana and vocabulary hints</p>
        </div>

        {/* Input Area */}
        <Card className="p-6 bg-card border-border">
          <label className="block text-sm font-medium text-foreground mb-2">Paste Japanese Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste Japanese text here to analyze..."
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button onClick={analyzeText} className="mt-4 bg-primary text-primary-foreground">
            Analyze Text
          </Button>
        </Card>

        {/* Output Area */}
        {text && (
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-foreground mb-4">Analysis Results</h3>
            <div className="bg-background p-4 rounded border border-border">
              {/* TODO: Display analyzed text with furigana */}
              <p className="text-foreground/60 text-center">TODO: Display furigana and annotations here</p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Difficult Kanji</h4>
                <div className="flex flex-wrap gap-2">
                  {/* TODO: Display difficult kanji from text */}
                  <span className="px-3 py-1 bg-muted text-foreground rounded text-sm">None detected</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">New Vocabulary</h4>
                <div className="flex flex-wrap gap-2">
                  {/* TODO: Display new vocabulary from text */}
                  <span className="px-3 py-1 bg-muted text-foreground rounded text-sm">None detected</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Button variant="outline">Add All to Vocab</Button>
              <Button variant="outline">Export as PDF</Button>
            </div>
          </Card>
        )}

        {/* Sample Texts */}
        {!text && (
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-foreground mb-4">Sample Texts</h3>
            <p className="text-foreground/60 text-sm mb-4">TODO: Add sample Japanese texts for practice</p>
            <Button variant="outline">Load Sample Text</Button>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

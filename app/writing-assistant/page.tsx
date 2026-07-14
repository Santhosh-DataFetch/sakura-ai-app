'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function WritingAssistant() {
  const [writing, setWriting] = useState('')
  const [feedback, setFeedback] = useState<any>(null)

  const checkWriting = () => {
    // TODO: Send writing to AI for grammar/vocabulary check
    setFeedback({
      grammarIssues: [],
      vocabularySuggestions: [],
      overallScore: 0,
    })
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Writing Assistant</h1>
          <p className="text-foreground/70">Get feedback on your Japanese writing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Writing Input */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-card border-border">
              <label className="block text-sm font-medium text-foreground mb-2">Write in Japanese</label>
              <textarea
                value={writing}
                onChange={(e) => setWriting(e.target.value)}
                placeholder="Write a sentence or short paragraph in Japanese..."
                rows={8}
                className="w-full px-4 py-3 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="mt-4 flex gap-2">
                <Button onClick={checkWriting} className="bg-primary text-primary-foreground">
                  Check Writing
                </Button>
                <Button variant="outline">Clear</Button>
              </div>
            </Card>
          </div>

          {/* Feedback Panel */}
          <div>
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-4">Feedback</h3>

              {feedback ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Overall Score</p>
                    <div className="text-3xl font-bold text-primary">{feedback.overallScore}%</div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Grammar Issues</p>
                    {feedback.grammarIssues.length === 0 ? (
                      <p className="text-sm text-green-500">No issues found!</p>
                    ) : (
                      <ul className="text-sm space-y-1">
                        {feedback.grammarIssues.map((issue: any, i: number) => (
                          <li key={i} className="text-foreground/60">
                            • {issue}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Vocabulary</p>
                    {feedback.vocabularySuggestions.length === 0 ? (
                      <p className="text-sm text-foreground/60">Good vocabulary!</p>
                    ) : (
                      <ul className="text-sm space-y-1">
                        {feedback.vocabularySuggestions.map((sug: any, i: number) => (
                          <li key={i} className="text-foreground/60">
                            • {sug}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-foreground/60 text-sm">Write something and check it for feedback</p>
              )}
            </Card>
          </div>
        </div>

        {/* TODO: Add handwriting recognition, kanji practice, sentence patterns */}
        <Card className="p-4 bg-card border-border text-center">
          <p className="text-foreground/60 text-sm">TODO: Add handwriting recognition and kanji stroke practice</p>
        </Card>
      </div>
    </MainLayout>
  )
}

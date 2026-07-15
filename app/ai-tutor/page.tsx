'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'

export default function AITutor() {
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')
  const [topic, setTopic] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/ai-tutor',
    body: {
      difficulty,
      topic,
    },
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-red-500 mb-2"> TEST 123</h1>     
           <p className="text-foreground/70">Chat with your AI Japanese tutor</p>
        </div>

        {/* Settings */}
        <Card className="p-4 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Topic</label>
              <input
                type="text"
                placeholder="e.g. greetings, food, travel"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="p-4 bg-card border-border h-96 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-foreground/60">
                <p>Start a conversation with Sakura!</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
  onSubmit={(e) => {
    console.log("FORM SUBMITTED");
    handleSubmit(e);
  }}
  className="flex gap-2"
>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask Sakura something..."
              className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
          <button
  type="submit"
  disabled={isLoading}
  className="bg-primary text-primary-foreground px-4 py-2 rounded"
>
  Send
</button>
              Send
            </Button>
          </form>
        </Card>

        {/* TODO: Add conversation history, save conversations, export sessions */}
        <div className="text-center text-foreground/60 text-sm">
          <p>TODO: Save conversations to database and allow export</p>
        </div>
      </div>
    </MainLayout>
  )
}

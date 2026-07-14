'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Conversation() {
  const [conversations, setConversations] = useState<any[]>([])
  const [selectedConv, setSelectedConv] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')
  const [topic, setTopic] = useState('')

  const startNewConversation = () => {
    // TODO: Create new conversation in database
    // const newConv = { id, topic, difficulty_level: difficulty }
    // setConversations([...conversations, newConv])
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Conversation Practice</h1>
          <p className="text-foreground/70">Practice Japanese through simulated conversations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversation List */}
          <div className="lg:col-span-1">
            <Card className="p-4 bg-card border-border">
              <h3 className="font-semibold text-foreground mb-4">Recent Conversations</h3>
              <Button onClick={startNewConversation} className="w-full mb-4 bg-primary text-primary-foreground">
                + New Conversation
              </Button>

              <div className="space-y-2">
                {conversations.length === 0 ? (
                  <p className="text-sm text-foreground/60">No conversations yet. Start one!</p>
                ) : (
                  conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConv(conv.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedConv === conv.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <p className="font-medium text-sm">{conv.topic || 'Conversation'}</p>
                      <p className="text-xs text-foreground/60">{conv.difficulty_level}</p>
                    </button>
                  ))
                )}
              </div>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            {selectedConv ? (
              <Card className="p-4 bg-card border-border h-96 flex flex-col">
                <div className="flex-1 overflow-y-auto mb-4">
                  <p className="text-foreground/60 text-center">TODO: Display conversation messages</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    // TODO: Send message
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground">
                    Send
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-8 bg-card border-border">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Start a Conversation</h3>
                  <p className="text-foreground/60 mb-6">Practice your conversational Japanese skills</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Difficulty Level</label>
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
                      placeholder="e.g. restaurant, train station, shopping"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button onClick={startNewConversation} className="w-full bg-primary text-primary-foreground">
                    Start Conversation
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

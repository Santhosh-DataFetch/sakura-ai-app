import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        {/* Logo and Header */}
        <div className="mb-8 flex justify-center">
          <div className="text-6xl">🌸</div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Master Japanese with <span className="text-primary">Sakura AI</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Learn Japanese through intelligent spaced repetition, AI-powered tutoring, and immersive conversation practice.
          Transform your language learning with adaptive algorithms and personalized feedback.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🈴</div>
            <h3 className="font-semibold mb-2 text-foreground">Kanji Mastery</h3>
            <p className="text-sm text-foreground/60">Learn kanji efficiently with FSRS spaced repetition algorithm</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-semibold mb-2 text-foreground">Vocabulary Builder</h3>
            <p className="text-sm text-foreground/60">Build your vocabulary with context and example sentences</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-semibold mb-2 text-foreground">AI Tutor</h3>
            <p className="text-sm text-foreground/60">Chat with an intelligent tutor powered by cutting-edge AI</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-semibold mb-2 text-foreground">Conversation Practice</h3>
            <p className="text-sm text-foreground/60">Practice real-world conversations with native patterns</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📖</div>
            <h3 className="font-semibold mb-2 text-foreground">Interactive Dictionary</h3>
            <p className="text-sm text-foreground/60">Look up words with detailed explanations and examples</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="font-semibold mb-2 text-foreground">Progress Tracking</h3>
            <p className="text-sm text-foreground/60">Monitor your learning journey with detailed analytics</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/auth/sign-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Learning Free
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Social Proof / Stats */}
        <div className="flex flex-col md:flex-row gap-8 justify-center text-sm text-foreground/60 py-8 border-t border-border">
          <div>
            <p className="font-semibold text-foreground">5000+</p>
            <p>Active Learners</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">50K+</p>
            <p>Study Sessions</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">2000+</p>
            <p>Kanji & Vocab</p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/kanji', label: 'Kanji SRS', icon: '🈴' },
  { href: '/vocabulary', label: 'Vocabulary', icon: '📚' },
  { href: '/ai-tutor', label: 'AI Tutor', icon: '🤖' },
  { href: '/dictionary', label: 'Dictionary', icon: '📖' },
  { href: '/reading-assistant', label: 'Reading Assistant', icon: '👁️' },
  { href: '/writing-assistant', label: 'Writing Assistant', icon: '✍️' },
  { href: '/conversation', label: 'Conversation', icon: '💬' },
  { href: '/progress', label: 'Progress', icon: '📈' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-40 p-2 rounded-md lg:hidden bg-sidebar text-sidebar-foreground border border-sidebar-border hover:bg-sidebar-accent"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-sidebar border-r border-sidebar-border z-30 lg:z-0 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-sidebar-primary">
            <span className="text-2xl">🌸</span>
            Sakura AI
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer - TODO: Add user profile here */}
        <div className="border-t border-sidebar-border p-4 text-xs text-sidebar-foreground/60">
          <p>Sakura AI v1.0</p>
          <p>Master Japanese with spaced repetition</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/20 z-20 lg:hidden" onClick={() => setOpen(false)} />}
    </>
  )
}

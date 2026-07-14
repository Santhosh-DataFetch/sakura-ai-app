'use client'

import { MainLayout } from '@/components/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Dictionary() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement dictionary search API call
    setSearched(true)
    setSearchResults([])
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dictionary</h1>
          <p className="text-foreground/70">Search and learn Japanese words</p>
        </div>

        {/* Search */}
        <Card className="p-6 bg-card border-border">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search by kanji, hiragana, or English meaning..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 bg-background border border-border rounded text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" className="bg-primary text-primary-foreground">
              Search
            </Button>
          </form>
        </Card>

        {/* Results */}
        {searched && (
          <div className="space-y-4">
            {searchResults.length === 0 ? (
              <Card className="p-8 bg-card border-border text-center">
                <p className="text-foreground/60">
                  {searchQuery ? `No results found for "${searchQuery}"` : 'No search results'}
                </p>
              </Card>
            ) : (
              searchResults.map((result) => (
                <Card key={result.id} className="p-4 bg-card border-border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{result.word}</h3>
                      <p className="text-foreground/60">{result.reading}</p>
                      <p className="text-foreground/80 mt-2">{result.meaning}</p>
                      {result.example && <p className="text-sm text-foreground/60 mt-2 italic">{result.example}</p>}
                    </div>
                    <Button variant="outline">Add to Vocab</Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        )}

        {/* TODO: Display sample dictionary entries on first load */}
        {!searched && (
          <Card className="p-8 bg-card border-border text-center">
            <p className="text-foreground/60 mb-4">Browse the dictionary by searching for words</p>
            <p className="text-sm text-foreground/60">
              Try searching for: 日本 (Japan), 猫 (cat), or 食べる (to eat)
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  )
}

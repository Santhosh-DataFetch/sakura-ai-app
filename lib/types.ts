export interface KanjiSRS {
  id: string
  user_id: string
  kanji: string
  meaning?: string
  on_reading?: string
  kun_reading?: string
  strokes?: number
  frequency?: number
  due_date?: Date
  interval: number
  ease_factor: number
  repetitions: number
  review_status: 'new' | 'learning' | 'review' | 'suspended'
  created_at: Date
  updated_at: Date
}

export interface VocabularySRS {
  id: string
  user_id: string
  word: string
  reading?: string
  meaning?: string
  example_sentence?: string
  part_of_speech?: string
  due_date?: Date
  interval: number
  ease_factor: number
  repetitions: number
  review_status: 'new' | 'learning' | 'review' | 'suspended'
  created_at: Date
  updated_at: Date
}

export interface DictionaryEntry {
  id: string
  kanji?: string
  hiragana: string
  meaning: string
  example_sentence?: string
  furigana?: string
  part_of_speech?: string
  created_at: Date
}

export interface Conversation {
  id: string
  user_id: string
  topic?: string
  difficulty_level?: string
  created_at: Date
  updated_at: Date
}

export interface ConversationMessage {
  id: string
  conversation_id: string
  user_id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface LearningProgress {
  id: string
  user_id: string
  daily_streak: number
  total_reviews: number
  kanji_learned: number
  vocabulary_learned: number
  last_review_date?: Date
  created_at: Date
  updated_at: Date
}

export interface UserSettings {
  id: string
  user_id: string
  theme: 'light' | 'dark' | 'system'
  language: string
  daily_goal: number
  notification_enabled: boolean
  created_at: Date
  updated_at: Date
}

export interface UserProfile {
  id: string
  first_name?: string
  last_name?: string
  created_at: Date
  updated_at: Date
}

export interface ReviewResponse {
  quality: 0 | 1 | 2 | 3 | 4 | 5
  state: 'new' | 'learning' | 'review' | 'relearning'
}

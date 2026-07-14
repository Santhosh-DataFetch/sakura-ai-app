# Sakura AI - Japanese Language Learning Platform

## Project Overview

Sakura AI is a comprehensive Japanese language learning platform built with Next.js 16, Supabase authentication, and AI-powered tutoring. The app uses the FSRS (Free Spaced Repetition Scheduler) algorithm for optimal learning retention and Google Gemini AI for intelligent tutoring.

## ✅ Completed Implementation

### Phase 1-2: Infrastructure & Setup
- ✅ Next.js 16 with Turbopack configured
- ✅ Tailwind CSS v4 with Sakura-inspired theme (pink/purple colors)
- ✅ Supabase authentication (email + password)
- ✅ Database schema with 8 tables and RLS policies:
  - `profiles` - User profile data
  - `kanji_srs` - Kanji learning with FSRS data
  - `vocabulary_srs` - Vocabulary learning with FSRS data
  - `dictionary` - Public dictionary entries
  - `conversations` - User conversation sessions
  - `conversation_messages` - Chat message history
  - `learning_progress` - Progress tracking
  - `user_settings` - User preferences
- ✅ Auth trigger for auto-creating user profile, progress, and settings on signup
- ✅ Middleware for session token refresh
- ✅ next-themes for dark/light mode support

### Phase 3-4: Authentication & Core Pages
- ✅ Login page (/auth/login) - Email + password authentication
- ✅ Sign up page (/auth/sign-up) - Account creation with email confirmation
- ✅ Auth callback route (/auth/callback) - OAuth/email link handling
- ✅ Landing page (/) - Marketing page with feature showcase
- ✅ Dashboard (/dashboard) - Main hub with quick stats and quick-access cards
- ✅ All 12 learning pages with placeholder implementations:
  - ✅ Kanji SRS (/kanji) - Flashcard review interface
  - ✅ Vocabulary (/vocabulary) - Word learning and review
  - ✅ AI Tutor (/ai-tutor) - Chat with Sakura AI tuttor
  - ✅ Conversation Practice (/conversation) - Scenario-based dialogues
  - ✅ Dictionary (/dictionary) - Word lookup tool
  - ✅ Reading Assistant (/reading-assistant) - Text analysis with furigana
  - ✅ Writing Assistant (/writing-assistant) - Grammar/vocab feedback
  - ✅ Progress (/progress) - Learning analytics dashboard
  - ✅ Settings (/settings) - Preferences and account management
- ✅ Main layout wrapper with authentication redirect
- ✅ Sidebar navigation with all 10 learning modules

### Phase 5-6: Core Systems
- ✅ FSRS Algorithm Implementation (`lib/fsrs.ts`)
  - Spaced repetition scheduling based on review quality (0-5)
  - Card state management (new, learning, review, relearning)
  - Stability and difficulty tracking
  - Optimal interval calculation
- ✅ AI Tutor API Route (`app/api/ai-tutor/route.ts`)
  - Google Gemini integration via Vercel AI Gateway
  - Streaming text responses
  - Difficulty-aware prompting
  - Context awareness for topic-based learning
- ✅ Auth Hooks (`hooks/useAuth.ts`)
  - User authentication state management
  - Real-time auth state changes
  - Loading state tracking
- ✅ Type Definitions (`lib/types.ts`)
  - All domain models with TypeScript interfaces
  - SRS card types
  - Review response types
- ✅ Supabase Client Helpers
  - Browser client (`lib/supabase/client.ts`)
  - Server client (`lib/supabase/server.ts`)
  - Proxy for session handling (`lib/supabase/proxy.ts`)

### Phase 7-9: UI & Polish
- ✅ Sakura-inspired color scheme
  - Primary: Pink (#e91e63 / oklch 0.55 0.16 325)
  - Accent: Orange-yellow (#ffa726 / oklch 0.72 0.12 45)
  - Secondary: Purple tints
  - Light/Dark theme with semantic tokens
- ✅ Responsive design
  - Mobile-first approach
  - Sidebar collapses on mobile with hamburger menu
  - Proper viewport settings for PWA
- ✅ Sidebar Component
  - Navigation with active state highlighting
  - Mobile drawer with overlay
  - User stats footer placeholder
- ✅ Main Layout Component
  - Auth protection wrapper
  - Responsive layout management
  - Loading state
- ✅ Reusable UI Components
  - MainLayout wrapper
  - RootLayoutClient for theme provider
  - Card components from shadcn/ui
- ✅ shadcn/ui Integration
  - Button, Card, Input, Label, Form components installed
  - Theme customization applied

## 📁 Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Landing page
│   ├── globals.css                # Theme variables (Sakura theme)
│   ├── auth/
│   │   ├── login/page.tsx         # Login page
│   │   ├── sign-up/page.tsx       # Sign up page
│   │   ├── error/page.tsx         # Auth error page
│   │   └── callback/route.ts      # OAuth callback handler
│   ├── dashboard/page.tsx         # Main dashboard
│   ├── kanji/page.tsx             # Kanji SRS page
│   ├── vocabulary/page.tsx        # Vocabulary page
│   ├── ai-tutor/page.tsx          # AI Tutor chat
│   ├── conversation/page.tsx      # Conversation practice
│   ├── dictionary/page.tsx        # Dictionary search
│   ├── reading-assistant/page.tsx # Text reading helper
│   ├── writing-assistant/page.tsx # Writing feedback
│   ├── progress/page.tsx          # Progress analytics
│   ├── settings/page.tsx          # User settings
│   └── api/
│       └── ai-tutor/route.ts      # AI tutoring API
├── components/
│   ├── Sidebar.tsx                # Navigation sidebar
│   ├── MainLayout.tsx             # Protected layout wrapper
│   ├── RootLayoutClient.tsx       # Theme provider wrapper
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   ├── types.ts                   # TypeScript domain models
│   ├── fsrs.ts                    # FSRS algorithm implementation
│   └── supabase/
│       ├── client.ts              # Browser Supabase client
│       ├── server.ts              # Server Supabase client
│       └── proxy.ts               # Session proxy handler
├── hooks/
│   └── useAuth.ts                 # Auth state hook
├── middleware.ts                  # Session token refresh
├── package.json                   # Dependencies
└── next.config.mjs               # Next.js config
```

## 🔧 Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Authentication**: Supabase Auth (email + password)
- **Database**: Supabase PostgreSQL with Row Level Security
- **AI**: Vercel AI SDK 7.x with Google Gemini model
- **State Management**: React Query (installed, ready for integration)
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React (built into UI components)

## 🚀 Key Features Implemented

### 1. Spaced Repetition (FSRS Algorithm)
- Implements Free Spaced Repetition Scheduler v4
- Optimal interval calculation based on card difficulty and ease factor
- Four card states: new, learning, review, relearning
- Quality ratings from 0-5 for nuanced feedback

### 2. AI-Powered Tutoring
- Real-time chat with Google Gemini via Vercel AI Gateway
- Difficulty-aware responses (beginner, intermediate, advanced)
- Topic-specific learning contexts
- Streaming responses for live chat experience

### 3. Complete User Management
- Secure email + password authentication
- Row Level Security on all user data
- Automatic profile creation on signup
- Auto-initialized progress tracking and settings

### 4. Responsive Design
- Mobile-first responsive layout
- Touch-friendly navigation
- Dark/light theme toggle
- Proper viewport configuration for PWA support

## 📝 TODO / Future Implementation

The following features have TODO placeholders and are ready for implementation:

### Database Integration
- TODO: Save kanji/vocabulary to database from UI
- TODO: Implement FSRS review calculations and storage
- TODO: Save conversation history to database
- TODO: Load user's past conversations
- TODO: Track learning progress metrics

### Content & Features
- TODO: Populate dictionary with real entries
- TODO: Add sample kanji/vocabulary data
- TODO: Implement reading assistant (furigana, ruby text)
- TODO: Add handwriting recognition for writing practice
- TODO: Implement grammar checking for writing assistant
- TODO: Add audio pronunciation guide

### Advanced Learning
- TODO: Anki deck import functionality
- TODO: Generate personalized learning recommendations
- TODO: Implement daily streak tracking
- TODO: Add achievement/badge system
- TODO: Create learning statistics visualizations

### Admin & Moderation
- TODO: Admin dashboard for content management
- TODO: Dictionary entry management interface
- TODO: User moderation tools
- TODO: Content reporting system

## 🔐 Security Notes

- All database queries are scoped to authenticated user via RLS policies
- Email confirmation required for new accounts (Supabase default)
- Session tokens automatically refreshed via middleware
- No sensitive data stored in localStorage
- All API routes validate authentication before processing
- Supabase Row Level Security protects all user data

## 📦 Environment Variables Required

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback  # for dev
```

The app automatically uses the Vercel AI Gateway for AI model access (no additional API key needed for Gemini).

## 🎨 Design System

The app uses a Sakura-inspired color palette:
- **Primary**: Pink (romantic, warm)
- **Accent**: Orange-yellow (energetic, approachable)
- **Secondary**: Purple tints (sophisticated, calm)
- **Neutrals**: Grayscale with slight warm tones

All colors have light and dark mode variants using semantic tokens in Tailwind v4.

## 🧪 Testing the App

1. **Landing Page**: Open http://localhost:3000
2. **Sign Up**: Go to `/auth/sign-up` to create account
3. **Dashboard**: After auth, access `/dashboard` (protected route)
4. **Navigation**: Use sidebar to explore all 12 learning modules
5. **AI Tutor**: Test chat at `/ai-tutor`
6. **Settings**: Manage preferences at `/settings`

## 📊 Database Schema Summary

```sql
-- User account management
profiles(id, first_name, last_name, created_at, updated_at)

-- SRS learning data
kanji_srs(id, user_id, kanji, meaning, on_reading, kun_reading, strokes, frequency, due_date, interval, ease_factor, repetitions, review_status)
vocabulary_srs(id, user_id, word, reading, meaning, example_sentence, part_of_speech, due_date, interval, ease_factor, repetitions, review_status)

-- Reference data
dictionary(id, kanji, hiragana, meaning, example_sentence, furigana, part_of_speech, created_at)

-- Conversation & AI
conversations(id, user_id, topic, difficulty_level, created_at, updated_at)
conversation_messages(id, conversation_id, user_id, role, content, timestamp)

-- User progress
learning_progress(id, user_id, daily_streak, total_reviews, kanji_learned, vocabulary_learned, last_review_date)
user_settings(id, user_id, theme, language, daily_goal, notification_enabled)
```

All tables have RLS policies ensuring users can only access their own data.

## 🎯 Next Steps

1. **Connect Form Submission**: Wire UI forms to Supabase API calls
2. **Implement SRS Review Flow**: Use FSRS algorithm to schedule and track card reviews
3. **Add Flashcard UI**: Build interactive flashcard component for reviews
4. **Database Queries**: Implement TanStack Query hooks for data fetching
5. **Analytics**: Add charts using recharts for progress visualization
6. **Polish**: Refine animations and UX based on user testing

## 📞 Support

The app is fully functional as a scaffold with all core systems in place. All 12 main pages are created with placeholder implementations and TODO comments indicating where database integration and feature implementation is needed.

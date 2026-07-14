import { streamText } from 'ai'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

const MODEL = 'google/gemini-2.0-flash-exp'

export async function POST(req: Request) {
  try {
    const headersList = await headers()
    const body = await req.json()
    const { message, conversationId, topic, difficultyLevel } = body

    // Get authenticated user
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return new Response('Unauthorized', { status: 401 })
    }

    // TODO: Save message to conversation_messages table
    // TODO: Retrieve conversation history from database
    // For now, use empty history for demo

    const systemPrompt = `You are Sakura, an enthusiastic Japanese language tutor powered by AI. Your role is to help users learn Japanese through engaging conversation and interactive lessons.

Current context:
- User level: ${difficultyLevel || 'beginner'}
- Topic: ${topic || 'general conversation'}

Guidelines:
1. Adjust your language complexity based on the user's level
2. Use simple, clear Japanese with romaji when teaching new concepts
3. Provide cultural context when relevant
4. Encourage practice and celebrate progress
5. Ask follow-up questions to keep the conversation flowing
6. When appropriate, include hiragana/kanji with furigana
7. Provide English translations for new vocabulary

Keep responses concise and engaging. Mix Japanese and English based on the difficulty level.`

    const result = await streamText({
      model: MODEL,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      maxTokens: 500,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error('[v0] AI Tutor error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}

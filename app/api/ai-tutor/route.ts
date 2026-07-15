import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { messages, topic, difficulty } = body;

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const system = `
You are Sakura, an enthusiastic Japanese language tutor.

User Level: ${difficulty ?? "beginner"}
Topic: ${topic ?? "General Conversation"}

Rules:
- Teach Japanese naturally.
- Explain vocabulary.
- Include romaji when appropriate.
- Include English translations.
- Encourage the learner.
- Keep replies concise.
`;

    const result = streamText({
      model: google("gemini-2.0-flash"),
      system,
      messages,
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    return result.toDataStreamResponse();
  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({
        error: String(err),
      }),
      {
        status: 500,
      }
    );
  }
}
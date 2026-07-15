import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { messages, topic, difficultyLevel } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-flash"),
    system: `
You are Sakura, a Japanese tutor.
Level: ${difficultyLevel}
Topic: ${topic}
`,
    messages,
  });

  return result.toDataStreamResponse();
}
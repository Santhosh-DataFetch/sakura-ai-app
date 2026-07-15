import { streamText } from "ai";
import { google } from "@ai-sdk/google";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming body:", body);

    const { messages, topic, difficulty } = body;

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const result = streamText({
      model: google("gemini-2.0-flash"),
      system: `You are Sakura, a Japanese tutor.
User Level: ${difficulty ?? "beginner"}
Topic: ${topic ?? "General"}`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (err) {
    console.error("AI Tutor Error:", err);

    return Response.json(
      {
        success: false,
        error: String(err),
      },
      {
        status: 500,
      }
    );
  }
}
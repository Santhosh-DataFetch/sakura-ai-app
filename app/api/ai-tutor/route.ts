import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", JSON.stringify(body, null, 2));

    const { messages, topic, difficulty } = body;

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const result = await generateText({
      model: google("gemini-2.0-flash"),
      system: `You are Sakura, a Japanese tutor.

User Level: ${difficulty ?? "beginner"}
Topic: ${topic ?? "General"}
`,
      messages,
    });

    return Response.json({
      text: result.text,
    });
  } catch (err) {
    console.error(err);

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
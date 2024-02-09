import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // grabbing the user's input
  const params = await request.json();

  // passing it to ChatGPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: params.msgSystem,
      },
      {
        role: "user",
        content: params.msgUser,
      },
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  // send prompt to front-end
  return NextResponse.json(response);
}

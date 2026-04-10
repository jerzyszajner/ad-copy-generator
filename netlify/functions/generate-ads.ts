import { GoogleGenAI } from '@google/genai';
import type { AdInput } from '../../src/lib/types';
import { buildPrompt } from '../../src/lib/prompt';

export default async (req: Request) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Missing GEMINI_API_KEY' },
      { status: 500 },
    );
  }

  try {
    const input = (await req.json()) as AdInput;
    const prompt = buildPrompt(input);

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' },
    });

    const text = response.text ?? '';
    const data = JSON.parse(text);

    return Response.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return Response.json({ error: message }, { status: 500 });
  }
};

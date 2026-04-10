import type { AdInput } from './types';

export function buildPrompt(input: AdInput): string {
  return `You are a senior Google Ads copywriter with 10+ years of experience.

STRICT RULES:
- Headlines: MAXIMUM 30 characters each (including spaces)
- Descriptions: MAXIMUM 90 characters each (including spaces)
- Count characters carefully. If you exceed limits, the ad will be rejected.

Generate ${input.variantCount} distinct ad variants for:

Product: ${input.productName}
Description: ${input.description}
Target audience: ${input.audience}
Unique selling point: ${input.usp}
Tone: ${input.tone}
Output language: ${input.language}

Each variant must have a DIFFERENT angle (emotional, rational, urgency, social proof, etc).

Return ONLY valid JSON, no markdown, no code blocks, no extra text:
{
  "variants": [
    {
      "headlines": ["max 30 chars", "max 30 chars", "max 30 chars"],
      "descriptions": ["max 90 chars", "max 90 chars"],
      "rationale": "1-2 sentences explaining the creative angle"
    }
  ]
}`;
}

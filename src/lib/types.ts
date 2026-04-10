export type Tone = 'Professional' | 'Friendly' | 'Urgent' | 'Playful';
export type Language = 'Norwegian' | 'English';

export interface AdInput {
  productName: string;
  description: string;
  audience: string;
  usp: string;
  tone: Tone;
  language: Language;
  variantCount: 3 | 5 | 7;
}

export interface AdVariant {
  headlines: string[];
  descriptions: string[];
  rationale: string;
}

export interface AdResponse {
  variants: AdVariant[];
}
